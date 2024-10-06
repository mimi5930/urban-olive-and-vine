import { useState } from "react";
import { buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { mockEvents } from "../mockData";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "~/components/svg";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Link } from "@remix-run/react";
import { Event } from "~/components/Events";

export default function events() {
  function sameDay(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentEvent, setCurrentEvent] = useState<Event | undefined>(
    mockEvents.find((event) => {
      return sameDay(new Date(event.date), new Date());
    }),
  );

  function groupObjectsByTitle(objectsArray: Event[]): {
    [key: string]: Date[];
  } {
    const groupedObjects: { [key: string]: Date[] } = {};

    objectsArray.forEach((obj) => {
      const dateObject = new Date(obj.date);
      if (!groupedObjects[obj.title]) {
        groupedObjects[obj.title] = [];
      }
      groupedObjects[obj.title].push(dateObject);
    });

    return groupedObjects;
  }

  const sortedEvents = groupObjectsByTitle(mockEvents);

  return (
    <section className="mt-32 flex w-full flex-col">
      <h1 className="pb-5 text-center text-5xl">Events</h1>

      {!currentEvent ? (
        <div className="h-[40vh]">
          <h2 className="text-center text-2xl">
            {date?.toLocaleString(undefined, {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </h2>
          <h2 className="text-center text-2xl">No Live Musicians Tonight</h2>
          <p className="text-center">
            Check out our Event Calendar below or{" "}
            <Link to="#" className="underline">
              go to our next event
            </Link>
          </p>
        </div>
      ) : (
        <div className="min-h-[40vh] w-full gap-5 p-5">
          <div className="relative float-left mb-5 mr-5 w-5/12">
            <img
              className="size-full rounded-xl object-cover shadow-xl"
              src={currentEvent.image}
              alt={currentEvent.alt}
            />
            <div className="absolute right-5 top-5 rounded-sm bg-card p-4 font-semibold opacity-85">
              {new Date(currentEvent.date).toLocaleString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
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
          {sortedEvents[currentEvent.title].length > 1 && (
            <Accordion type="single" collapsible className="w-3/4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Hear {currentEvent.title} Another Night
                </AccordionTrigger>
                {sortedEvents[currentEvent.title].map((date, index) => {
                  return (
                    <AccordionContent key={index}>
                      <Link className="hover:underline" to="/events">
                        {date.toLocaleString(undefined, {
                          month: "long",
                          day: "2-digit",
                        })}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>
          )}
        </div>
      )}
      <div className="flex w-full justify-center">
        <Card>
          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setCurrentEvent(
                mockEvents.find((event) => {
                  return sameDay(new Date(event.date), new Date(date));
                }),
              );
            }}
            modifiers={sortedEvents}
            className="relative flex h-full w-full p-5"
            classNames={{
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
            }}
            components={{
              Chevron: (props) => {
                if (props.orientation === "left") {
                  return <ChevronLeftIcon className="size-8" />;
                }
                return <ChevronRightIcon className="size-8" />;
              },
              Day: (props) => {
                const { children, ...dayProps } = props;
                let currentModifier = "";
                Object.keys(sortedEvents).forEach((title) => {
                  if (dayProps.modifiers[title]) {
                    currentModifier = title;
                  }
                });

                function getImageByTitle(
                  objectsArray: Event[],
                  title: string,
                ): string | undefined {
                  const object = objectsArray.find(
                    (obj) => obj.title === title,
                  );
                  return object ? object.image : undefined;
                }
                const currentPicture = getImageByTitle(
                  mockEvents,
                  currentModifier,
                );

                return (
                  <td {...dayProps}>
                    {children}
                    {currentModifier && (
                      <div className="pointer-events-none absolute top-0 size-full opacity-40">
                        <img
                          className="size-full rounded-md object-cover blur-[1px]"
                          src={currentPicture}
                          alt=""
                        />
                      </div>
                    )}
                    {dayProps.modifiers.today && (
                      <div className="border-gradient-to-r pointer-events-none absolute top-0 box-border size-full rounded-md border-4 border-logo-green"></div>
                    )}
                  </td>
                );
              },
            }}
          />
        </Card>
      </div>
    </section>
  );
}
