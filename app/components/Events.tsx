import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

import { cn } from "~/lib/utils";

export type Event = {
  title: string;
  date: string;
  image: string;
  alt: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
  description: string;
};

export default function Events({
  events,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { events: Event[] }) {
  return (
    <section
      className={cn("min-h-[50vh] bg-eggshell-50 p-12", className)}
      {...props}
    >
      <h1 className="text-center text-7xl">Upcoming Events</h1>
      <div className="flex justify-center py-12">
        <div className="grid grid-cols-3 gap-10">
          {events.map((currentEvent, index) => {
            return <EventCard event={currentEvent} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
Events.displayName = "Events";

export function EventCard({
  event,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { event: Event }) {
  const { title, date, image, alt, description } = event;
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="aspect-square h-full p-6">
          <img
            className="h-full w-full rounded-xl object-cover shadow-lg"
            src={image}
            alt={alt}
          />
        </div>
        <p className="justify-self-start">{description}</p>
      </CardContent>
      <CardFooter className="justify-evenly">
        <Button>Learn More</Button>
        <Button>Add to Calendar</Button>
      </CardFooter>
    </Card>
  );
}
EventCard.displayName = "EventCard";
