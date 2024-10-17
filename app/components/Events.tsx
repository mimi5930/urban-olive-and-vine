import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import picture from "~/img/musician.jpg";

import { cn, imageDateText, mediumDateText, timeDateText } from "~/lib/utils";
import { SerializeFrom } from "@remix-run/node";
import { Link } from "@remix-run/react";
import AddToCalendarButton from "./AddToCalendarButton";

//* Type Definitions
export type Event = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  image: string;
  alt: React.ComponentPropsWithoutRef<"img">["alt"];
  description: string;
};

//* Default Export
export default function Events({
  events,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { events: SerializeFrom<Event[]> }) {
  return (
    <section
      className={cn(
        "flex min-h-[50vh] flex-col items-center gap-24 bg-feldgrau-900 p-12 pt-40",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-5 text-eggshell-50">
        {/* <div className="w-10 border-b-2 border-eggshell-50" /> */}
        <h1 className="text-center text-7xl">
          Upcoming <span className="text-logo-green">Events</span>
        </h1>
        {/* <div className="w-10 border-b-2 border-eggshell-50" /> */}
      </div>
      <div className="text-lg text-eggshell-50">
        <p>
          At Urban Olive & Vine, we love to showcase the incredible talent of
          our local artists and musicians. Our regular art exhibitions and live
          music events create an inviting atmosphere where you can relax and let
          the creativity flow. Come, sit back, and enjoy the vibrant sounds and
          sights while savoring a glass of fine wine or a cup of freshly brewed
          coffee. Whether you&apos;re here to unwind or be inspired, our space
          is your haven for enjoying the best of Hudson&apos;s artistic
          community.
        </p>
        <p className="italic">
          <Link className="underline" to="#">
            Contact us
          </Link>{" "}
          if you would like to play
        </p>
      </div>
      <div className="flex gap-5">
        {events.map(({ title, startTime, endTime, id }, index) => {
          const startTimeAsDate = new Date(startTime);
          return (
            <Link
              className="flex flex-col items-center p-5 text-center text-eggshell-50 transition-transform hover:scale-105"
              key={index}
              to={`/events/${id}`}
            >
              <div className="relative size-[25vh] shadow-xl">
                <img
                  src={picture}
                  alt=""
                  className="size-full rounded-md object-cover"
                />
              </div>
              {/* <div className="absolute right-1 top-1 rounded-sm bg-card p-1 font-semibold">
                {imageDateText(startTimeAsDate)}
              </div> */}
              <h3>{title}</h3>
              <p>{`${imageDateText(startTimeAsDate)} @ ${timeDateText(startTimeAsDate)}`}</p>
            </Link>
          );
        })}
      </div>

      {/* <div className="flex justify-center py-12">
        <div className="grid w-4/5 grid-cols-3 justify-items-center gap-10">
          {events.map((currentEvent) => {
            return <EventCard event={currentEvent} key={currentEvent.id} />;
          })}
        </div>
      </div> */}
    </section>
  );
}
Events.displayName = "Events";

//* Event Card
export function EventCard({
  event,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { event: SerializeFrom<Event> }) {
  const { id, title, startTime, image, alt, description } = event;
  return (
    <Card
      className={cn(
        "relative flex w-full max-w-80 flex-col justify-between",
        className,
      )}
      {...props}
    >
      <div>
        <CardHeader>
          <CardTitle className="flex justify-between">
            {title}
            <AddToCalendarButton currentEvent={event} />
          </CardTitle>
          <CardDescription>
            {mediumDateText(new Date(startTime))}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="aspect-square h-full p-6">
            <img
              className="h-full w-full rounded-xl object-cover shadow-lg"
              src={image}
              alt={alt}
            />
          </div>
          <p className="justify-self-start text-ellipsis">{description}</p>
        </CardContent>
      </div>
      <CardFooter className="">
        <Link to={`/events/${id}`}>
          <Button>Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
EventCard.displayName = "EventCard";
