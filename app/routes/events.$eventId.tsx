import { mockEvents } from "~/mockData";
import { Link, useOutletContext } from "@remix-run/react";
import { CalendarIcon } from "~/components/svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { EventOutletContextProps } from "./events";
import {
  findEventByDateAndTitle,
  imageDateText,
  longDateText,
  sameDay,
  shortDateText,
  timeDateText,
} from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import createEventCalendarLinks from "~/lib/addToCalendar";
import AddToCalendarButton from "~/components/AddToCalendarButton";

// ! This will probably not be necessary
// // Loader Function
// export const loader = async (params: { params: { eventId: string } }) => {
//   console.log("called eventID loader function");
//   const eventId = params.params.eventId;
//   const currentEvent = mockEvents.find((event) => {
//     return event.id === Number(eventId);
//   });
//   return json({ currentEvent, eventId });
// };

// Root Export
export default function IdEvent() {
  // ! Unneeded (currently) loader function
  // const { currentEvent } = useLoaderData<typeof loader>();
  const { setDate, sortedEvents, currentEvent, setCurrentEvent, events } =
    useOutletContext<EventOutletContextProps>();

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
            setCurrentEvent={setCurrentEvent}
            events={events}
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
  setCurrentEvent,
  events,
}: Pick<
  EventOutletContextProps,
  "currentEvent" | "sortedEvents" | "setDate" | "setCurrentEvent" | "events"
>) {
  return (
    <Accordion type="single" collapsible className="w-3/4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Hear {currentEvent.title} Another Night
        </AccordionTrigger>
        {sortedEvents[currentEvent.title].map((date, index) => {
          if (sameDay(date, new Date(currentEvent.startTime))) {
            return;
          }
          const eventId = findEventByDateAndTitle(
            date,
            currentEvent.title,
            mockEvents,
          );
          return (
            <AccordionContent key={index}>
              <Link
                className="hover:underline"
                to={`../${eventId}`}
                onClick={() => {
                  setDate(date);
                  setCurrentEvent(
                    events[
                      events.findIndex((event) => event.id === Number(eventId))
                    ],
                  );
                }}
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
}: Pick<EventOutletContextProps, "currentEvent">) {
  return (
    <div className="relative float-left mb-5 mr-5 w-5/12">
      <img
        className="size-full rounded-xl object-cover shadow-xl"
        src={currentEvent.image}
        alt={currentEvent.alt}
      />
      <div className="absolute right-5 top-5 rounded-sm bg-card p-4 font-semibold opacity-85">
        {imageDateText(new Date(currentEvent.startTime))}
      </div>
    </div>
  );
}

// event description with add to calendar
export function EventDescription({
  currentEvent,
}: Pick<EventOutletContextProps, "currentEvent">) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-semibold">{currentEvent.title}</h2>
        <AddToCalendarButton currentEvent={currentEvent} />
      </div>
      <h2 className="text-1xl">
        {`${longDateText(new Date(currentEvent.startTime))} - ${timeDateText(new Date(currentEvent.endTime))}`}
      </h2>
      <p>{currentEvent.description}</p>
    </div>
  );
}
