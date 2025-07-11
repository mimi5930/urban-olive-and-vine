import { SerializeFrom } from "react-router";
import { json, Link, Outlet, useLoaderData, useNavigate, useSearchParams } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";
import { Button, buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { mockEvents } from "~/mockData";
import { type Event } from "~/components/Events";
import {
  cn,
  findEventTimeById,
  groupObjectsByTitle,
  sameDay,
  timeDateText,
} from "~/lib/utils";
import { ChevronProps, ClassNames, DayProps } from "react-day-picker";
import { Badge } from "~/components/ui/badge";
import { changeMonth, displayMonth, isToday } from "~/lib/timeConversions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import AddToCalendarButton from "~/components/AddToCalendarButton";
import { urbanSummerEvents } from "~/data";

//* Loader function
// export const loader = async (params: { params: { eventId: string } }) => {
//   console.log("called event loader function");
//   // sort events by date
//   const sortEvents = mockEvents.sort(
//     ({ startTime }, { startTime: bStartTime }) =>
//       new Date(startTime).getTime() - new Date(bStartTime).getTime(),
//   );
//   // TODO: Chang this?
//   const eventId = params.params.eventId;
//   return json({ eventsData: urbanSummerEvents, eventId });
// };

//* Type defs
export type EventOutletContextProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  sortedEvents: {
    [key: string]: Date[];
  };
  events: SerializeFrom<Event[]>;
  currentEvent: SerializeFrom<Event>;
  setCurrentEvent: React.Dispatch<
    React.SetStateAction<SerializeFrom<Event> | undefined>
  >;
};

//* Root Export
export default function Events() {
  // state
  const navigate = useNavigate();
  // TODO: Add loader back
  // const { eventsData } = useLoaderData<typeof loader>();
  const eventsData = urbanSummerEvents;
  const [searchParams] = useSearchParams();
  const itemsRef = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    const eventId = searchParams.get("event");

    function scrollToEvent(event: string) {
      const map = getMap();
      const node = map.get(event);
      if (node) {
        node.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    if (eventId) {
      scrollToEvent(eventId);
    }
    return;
  }, [searchParams]);

  // modify data
  const currentEventTime = useMemo(() => {
    const searchParamsEvent = searchParams.get("event");
    if (!searchParamsEvent) {
      return new Date();
    } else {
      const eventTime = findEventTimeById(searchParamsEvent, eventsData);
      if (!eventTime) return new Date();
      return new Date(eventTime);
    }
  }, [searchParams, eventsData]);
  const [date, setDate] = useState<Date>(currentEventTime);
  const [month, setMonth] = useState(currentEventTime);
  const sortedEvents = groupObjectsByTitle(eventsData);

  // Click handler
  function calendarSelectHandler(date: Date) {
    // see if date exists in the events array
    const clickedEvent = eventsData.find((event) => {
      return sameDay(new Date(event.startTime), date);
    });
    // navigate to the event
    if (clickedEvent) {
      navigate(
        { pathname: "/events", search: "?event=" + clickedEvent.id },
        {
          preventScrollReset: true,
        },
      );
      // or navigate to current page
    } else {
      navigate("/events", { preventScrollReset: true });
    }
    setDate(date);
  }

  function getMap(): Map<string, HTMLElement | null> {
    return itemsRef.current;
  }

  return (
    <section className="my-32 flex flex-col items-center">
      <h1 className="pb-10 text-center text-5xl">Event Calendar</h1>
      <div className="flex justify-center">
        <Card>
          <Calendar
            mode="single"
            required
            showOutsideDays={false}
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={(date) => calendarSelectHandler(date)}
            modifiers={sortedEvents}
            className="relative flex p-1 lg:p-5"
            classNames={calendarCustomClassNames}
            components={calendarCustomComponents(sortedEvents)}
          />
        </Card>
      </div>
      <div className="my-16 flex flex-col gap-16 lg:my-24 lg:gap-10">
        {eventsData.map((event, index) => {
          if (
            new Date(event.startTime).getMonth() === month.getMonth() &&
            new Date(event.startTime).getFullYear() === month.getFullYear()
          )
            return (
              <article
                key={index}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(event.id.toString(), node);
                  } else {
                    map.delete(event.id.toString());
                  }
                }}
                id={event.id.toString()}
                className="flex max-w-7xl flex-col gap-2 p-3 lg:p-10"
              >
                <div className="flex flex-col gap-3 lg:p-10">
                  <div className="relative flex items-center justify-between">
                    {isToday(null, event.startTime) ? (
                      <Badge className="absolute -right-2 -top-2 bg-feldgrau-300">
                        Tonight!
                      </Badge>
                    ) : null}
                    <h2 className="text-3xl font-bold">
                      {event.title.toUpperCase()}
                    </h2>
                    <div className="bg-feldgrau p-5 text-2xl font-bold text-eggshell-50">
                      {new Date(event.startTime).toLocaleString(undefined, {
                        dateStyle: "medium",
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col-reverse">
                    <Accordion className="peer" type="single" collapsible>
                      <AccordionItem className="peer" value="show more">
                        <AccordionTrigger className="[&>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0">
                          More Event Details
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* <AddToCalendarButton currentEvent={event} /> */}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="description line-clamp-3 max-w-[75%] peer-has-[*[data-state=open]]:line-clamp-none">
                      {event.description}
                    </div>
                  </div>
                  <p className="flex gap-2 text-xl text-logo-green">
                    <span className="font-semibold text-black">
                      Happening from:
                    </span>
                    {`${timeDateText(new Date(event.startTime))} - ${timeDateText(new Date(event.endTime))}`}
                  </p>
                </div>
                <div className="m-auto h-[50vh] w-full rounded-lg lg:w-3/4">
                  <img
                    className="size-full object-contain"
                    src={event.image}
                    alt={event.alt}
                  />
                </div>
              </article>
            );
        })}
      </div>
      <div className="flex gap-3">
        {/* <Button onClick={() => setMonth(changeMonth(month, -1))}>
          <ChevronLeftIcon />
          {displayMonth(month.getMonth() - 1)}&apos;s Events
        </Button> */}
        <Link className="m-auto" to="/events">
          <Button className="hover:underline">
            Scroll Up to Event Calendar
          </Button>
        </Link>
      </div>
    </section>
  );

  // return (
  //   <section className="mt-32 flex w-full flex-col">
  //     <h1 className="pb-5 text-center text-5xl">Events</h1>
  //     <Outlet
  //       context={{
  //         date: date,
  //         setDate: setDate,
  //         events: mockEvents,
  //         sortedEvents: sortedEvents,
  //         currentEvent: currentEvent,
  //         setCurrentEvent: setCurrentEvent,
  //       }}
  //     />
  //     <div className="flex justify-center">
  //       <Card>
  //         <Calendar
  //           mode="single"
  //           required
  //           selected={date}
  //           onSelect={(date) => calendarSelectHandler(date)}
  //           modifiers={sortedEvents}
  //           className="relative flex h-full w-full p-5"
  //           classNames={calendarCustomClassNames}
  //           components={calendarCustomComponents(sortedEvents)}
  //         />
  //       </Card>
  //     </div>
  //   </section>
  // );
}

//* ClassNames for existing elements in Calendar
export const calendarCustomClassNames: Partial<ClassNames> | undefined = {
  months: "flex w-full flex-col space-y-4 flex-1",
  month: "space-y-4 w-full flex flex-col ml-0",
  month_grid: "w-full h-full border-collapse space-y-1",
  weekdays: "",
  week: "w-full mt-2",
  nav: "space-x-1 flex justify-between w-full",
  caption_label: "text-xl font-medium",
  day_button: cn(
    buttonVariants({ variant: "ghost" }),
    "md:size-24 size-[13dvw] p-0 font-normal aria-selected:opacity-100 hover:bg-feldgrau hover:text-white",
  ),
  day: "rounded-md relative z-50 p-0 text-center text-sm focus-within:relative focus-within:z-20 focus-within:rounded-md [&:has([aria-selected])]:bg-feldgrau [&:has([aria-selected].day-outside)]:bg-feldgrau/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
  selected:
    "rounded-md bg-feldgrau text-primary-foreground hover:bg-feldgrau hover:text-primary-foreground focus:bg-feldgrau focus:text-primary-foreground",
  weekday: "rounded-md w-8 font-semi-bold text-lg",
  weeks: "text-center",
};

//* Custom Components for Calendar
export function calendarCustomComponents(sortedEvents: {
  [key: string]: Date[];
}) {
  return {
    // Chevrons
    Chevron: (props: ChevronProps) => {
      if (props.orientation === "left") {
        return <ChevronLeftIcon className="size-8" />;
      }
      return <ChevronRightIcon className="size-8" />;
    },
    // The Day component
    Day: (props: DayProps) => {
      const { children, ...dayProps } = props;
      let currentModifier = "";
      Object.keys(sortedEvents).forEach((title) => {
        if (dayProps.modifiers[title]) {
          currentModifier = title;
        }
      });

      function getImageByTitle(
        objectsArray: SerializeFrom<Event[]>,
        title: string,
      ): string | undefined {
        const object = objectsArray.find((obj) => obj.title === title);
        return object ? object.image : undefined;
      }
      const currentPicture = getImageByTitle(
        urbanSummerEvents,
        currentModifier,
      );

      return (
        <td {...dayProps}>
          {children}
          {currentModifier && (
            <div className="pointer-events-none absolute top-0 size-full opacity-30">
              <img
                className="size-full rounded-md object-cover blur-[1px]"
                src={currentPicture}
                alt=""
              />
            </div>
          )}
          {dayProps.modifiers.today && (
            <div className="pointer-events-none absolute top-0 box-border size-full rounded-sm ring-4 ring-inset ring-logo-green-200"></div>
          )}
        </td>
      );
    },
  };
}
