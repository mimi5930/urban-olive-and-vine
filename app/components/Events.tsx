import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

import { cn, mediumDateText } from "~/lib/utils";
import { CalendarIcon } from "./svg";
import { SerializeFrom } from "@remix-run/node";
import { Link } from "@remix-run/react";

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
      className={cn("min-h-[50vh] bg-eggshell-50 p-12", className)}
      {...props}
    >
      <h1 className="text-center text-7xl">Upcoming Events</h1>
      <div className="flex justify-center py-12">
        <div className="grid grid-cols-3 gap-10">
          {events.map((currentEvent) => {
            return <EventCard event={currentEvent} key={currentEvent.id} />;
          })}
        </div>
      </div>
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
      className={cn("relative flex w-full flex-col justify-between", className)}
      {...props}
    >
      <div>
        <CardHeader>
          <CardTitle className="flex justify-between">
            {title}
            <CalendarIcon />
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
