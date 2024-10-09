import { mockEvents } from "~/mockData";
import { type Event } from "~/components/Events";
import { json, Link, useLoaderData, useOutletContext } from "@remix-run/react";
import { CalendarIcon } from "~/components/svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { EventOutletContextProps } from "./events";
import { imageDateText, setAccordionLink, shortDateText } from "~/lib/utils";
import { SerializeFrom } from "@remix-run/node";

// Loader Function
export const loader = async (params: { params: { eventId: string } }) => {
  console.log("called eventID loader function");
  const eventId = params.params.eventId;
  const currentEvent = mockEvents.find((event) => {
    return event.id === Number(eventId);
  });
  return json({ currentEvent, eventId });
};

// Root Export
export default function IdEvent() {
  const { currentEvent } = useLoaderData<typeof loader>();
  const { setDate, sortedEvents } = useOutletContext<EventOutletContextProps>();

  if (currentEvent && sortedEvents && setDate)
    return (
      <div className="min-h-[40vh] w-full gap-5 p-5">
        <EventImage currentEvent={currentEvent} />
        <EventDescription currentEvent={currentEvent} />
        {sortedEvents[currentEvent.title].length > 1 && (
          <EventAccordion
            currentEvent={currentEvent}
            sortedEvents={sortedEvents}
            setDate={setDate}
          />
        )}
      </div>
    );
}

// Accordion for future events with the band
export function EventAccordion({
  currentEvent,
  sortedEvents,
  setDate,
}: {
  currentEvent: SerializeFrom<Event>;
  sortedEvents: {
    [key: string]: Date[];
  };
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <Accordion type="single" collapsible className="w-3/4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Hear {currentEvent.title} Another Night
        </AccordionTrigger>
        {sortedEvents[currentEvent.title].map((date, index) => {
          return (
            <AccordionContent key={index}>
              <Link
                className="hover:underline"
                to={setAccordionLink(date, currentEvent.title, mockEvents)}
                onClick={() => setDate(date)}
              >
                {shortDateText(date)}
              </Link>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}

// Event image and date display
export function EventImage({
  currentEvent,
}: {
  currentEvent: SerializeFrom<Event>;
}) {
  return (
    <div className="relative float-left mb-5 mr-5 w-5/12">
      <img
        className="size-full rounded-xl object-cover shadow-xl"
        src={currentEvent.image}
        alt={currentEvent.alt}
      />
      <div className="absolute right-5 top-5 rounded-sm bg-card p-4 font-semibold opacity-85">
        {imageDateText(new Date(currentEvent.date))}
      </div>
    </div>
  );
}

// event description with add to calendar
export function EventDescription({
  currentEvent,
}: {
  currentEvent: SerializeFrom<Event>;
}) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-semibold">{currentEvent.title}</h2>
        <Link to="#">
          <CalendarIcon />
        </Link>
      </div>
      <h2 className="text-1xl">{currentEvent.date}</h2>
      <p>{currentEvent.description}</p>
    </div>
  );
}
