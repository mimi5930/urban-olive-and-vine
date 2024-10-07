import { useState } from "react";
import { mockEvents } from "~/mockData";
import { type Event } from "~/components/Events";
import { Link, useOutletContext, useParams } from "@remix-run/react";

export default function Event() {
  function sameDay(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  const { date }: { date: Date | undefined } = useOutletContext();
  const { eventId } = useParams();

  // TEST
  return <div>{date?.getDate()}</div>;

  if (!currentEvent) {
    return (
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
    );
  } else {
    return;
    <div>yay an event!</div>;
  }
  return;

  {
    !currentEvent ? (
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
    );
  }
}
