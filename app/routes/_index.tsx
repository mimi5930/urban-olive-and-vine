import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CallToAction, Events, Hero } from "~/components";
import {
  displayTime,
  isOpenOnDay,
  isToday,
  parseTime,
} from "~/lib/timeConversions";
import { cn } from "~/lib/utils";
import { mockEvents } from "~/mockData";

export const meta: MetaFunction = () => {
  return [
    { title: "Urban Olive & Vine" },
    {
      name: "description",
      content: "Welcome to Hudson's Urban Olive and Vine",
    },
  ];
};

export async function loader() {
  console.log("ran home page loader");

  // organize events
  const organizedMockEvents = mockEvents.sort((a, b) => {
    if (new Date(a.startTime) > new Date(b.startTime)) {
      return 1;
    } else if (new Date(a.startTime) < new Date(b.startTime)) {
      return -1;
    }
    return 0;
  });

  // show only events after today
  const currentDate = new Date();
  const filteredEvents = organizedMockEvents.filter((event) => {
    return (
      // event date
      new Date(event.startTime) >
      // current date - 1
      new Date(currentDate.setDate(currentDate.getDate() - 1))
    );
  });

  return json(filteredEvents.slice(0, 4));
}

const hours: { [key: string]: { open: string | null; close: string | null } } =
  {
    Sunday: { open: null, close: null },
    Monday: { open: "8:00", close: "16:00" },
    Tuesday: { open: "8:00", close: "16:00" },
    Wednesday: { open: "8:00", close: "16:00" },
    Thursday: { open: "8:00", close: "20:00" },
    Friday: { open: "8:00", close: "20:00" },
    Saturday: { open: "8:00", close: "20:00" },
  };

export default function index() {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="min-h-screen w-full">
      <Hero />
      <CallToAction />
      <Events events={data} />
      <section className="min-h-[40vh] p-10">
        <div className="my-10">
          <h2 className="mb-5 text-center text-5xl">Hours</h2>
          <div className="flex justify-center gap-5">
            {Object.keys(hours).map((day, index) => {
              const { open, close } = hours[day];
              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col p-2.5",
                    isToday(day) ? "text-logo-green" : "opacity-80",
                  )}
                >
                  <p className="text-xl font-semibold">{day.toUpperCase()}</p>
                  <p className="text-md">
                    {open && close
                      ? `${displayTime(open)} - ${displayTime(close)}`
                      : "CLOSED"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
