import { SerializeFrom } from "@remix-run/node";
import { json, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";
import { buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { mockEvents } from "~/mockData";
import { type Event } from "~/components/Events";
import { cn, findEventById, groupObjectsByTitle, sameDay } from "~/lib/utils";
import { ClassNames } from "react-day-picker";

// Loader function
export const loader = async (params: { params: { eventId: string } }) => {
  console.log("called event loader function");

  const eventId = params.params.eventId;
  return json({ mockEvents, eventId });
};

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
  const { mockEvents, eventId } = useLoaderData<typeof loader>();

  // modify data
  const [currentEvent, setCurrentEvent] = useState(
    findEventById(eventId, mockEvents),
  );
  const [date, setDate] = useState<Date | undefined>(() => {
    console.log(eventId);
    if (!eventId || !currentEvent) {
      return new Date();
    } else {
      return new Date(currentEvent.startTime);
    }
  });
  const sortedEvents = groupObjectsByTitle(mockEvents);

  // Click handler
  function calendarSelectHandler(date: Date) {
    // see if date exists in the events array
    const clickedEvent = mockEvents.find((event) => {
      return sameDay(new Date(event.startTime), date);
    });
    console.log(clickedEvent ?? "there is a clicked event");
    // navigate to the event
    if (clickedEvent) {
      setCurrentEvent(clickedEvent);
      navigate(`/events/${clickedEvent.id}`, {
        preventScrollReset: true,
      });
      // or navigate to current page
    } else {
      navigate("/events", { preventScrollReset: true });
    }
    setDate(date);
  }

  return (
    <section className="mt-32 flex w-full flex-col">
      <h1 className="pb-5 text-center text-5xl">Events</h1>
      <Outlet
        context={{
          date: date,
          setDate: setDate,
          events: mockEvents,
          sortedEvents: sortedEvents,
          currentEvent: currentEvent,
          setCurrentEvent: setCurrentEvent,
        }}
      />
      <div className="flex justify-center">
        <Card>
          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={(date) => calendarSelectHandler(date)}
            modifiers={sortedEvents}
            className="relative flex h-full w-full p-5"
            classNames={calendarCustomClassNames}
            components={calendarCustomComponents(sortedEvents)}
          />
        </Card>
      </div>
    </section>
  );
}

//* ClassNames for existing eleemnts in Calendar
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
    "size-24 p-0 font-normal aria-selected:opacity-100 hover:bg-feldgrau hover:text-white",
  ),
  day: ":rounded-md relative z-20 p-0 text-center text-sm focus-within:relative focus-within:z-20 focus-within:rounded-md [&:has([aria-selected])]:bg-feldgrau [&:has([aria-selected].day-outside)]:bg-feldgrau/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
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
    Chevron: (props) => {
      // eslint-disable-next-line react/prop-types
      if (props.orientation === "left") {
        return <ChevronLeftIcon className="size-8" />;
      }
      return <ChevronRightIcon className="size-8" />;
    },
    // The Day component
    Day: (props) => {
      // eslint-disable-next-line react/prop-types
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
      const currentPicture = getImageByTitle(mockEvents, currentModifier);

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
            <div className="pointer-events-none absolute top-0 box-border size-full rounded-sm border-4 border-logo-green"></div>
          )}
        </td>
      );
    },
  };
}
