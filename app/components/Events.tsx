import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import picture from "~/img/sample-musician.jpg";
import { cn } from "~/lib/utils";

export type Event = {
  title: string;
  date: string;
  image: string;
  alt: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
  description: string;
};

const testEvents: Event[] = [
  {
    title: "Cool Band",
    date: "Friday, Sep 6, 6:00 PM - 8:30 PM",
    image: picture,
    alt: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto natus quos ut quidem maxime? Explicabo, eligendi amet. Excepturi reiciendis velit tempora rerum molestias, voluptate amet quia magni quaerat aut.",
  },
  {
    title: "Cool Band",
    date: "Friday, Sep 6, 6:00 PM - 8:30 PM",
    image: picture,
    alt: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto natus quos ut quidem maxime? Explicabo, eligendi amet. Excepturi reiciendis velit tempora rerum molestias, voluptate amet quia magni quaerat aut.",
  },
  {
    title: "Cool Band",
    date: "Friday, Sep 6, 6:00 PM - 8:30 PM",
    image: picture,
    alt: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto natus quos ut quidem maxime? Explicabo, eligendi amet. Excepturi reiciendis velit tempora rerum molestias, voluptate amet quia magni quaerat aut.",
  },
  {
    title: "Cool Band",
    date: "Friday, Sep 6, 6:00 PM - 8:30 PM",
    image: picture,
    alt: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto natus quos ut quidem maxime? Explicabo, eligendi amet. Excepturi reiciendis velit tempora rerum molestias, voluptate amet quia magni quaerat aut.",
  },
  {
    title: "Cool Band",
    date: "Friday, Sep 6, 6:00 PM - 8:30 PM",
    image: picture,
    alt: "",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto natus quos ut quidem maxime? Explicabo, eligendi amet. Excepturi reiciendis velit tempora rerum molestias, voluptate amet quia magni quaerat aut.",
  },
];

export default function Events() {
  return (
    <section className="min-h-[50vh] bg-eggshell-50 p-12">
      <h1 className="text-center text-7xl">Upcoming Events</h1>
      <div className="flex justify-center py-12">
        <div className="grid w-3/4 grid-cols-3 gap-10">
          {testEvents.map((event, index) => {
            return <EventCard event={event} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
Events.displayName = "Events";

export function EventCard({
  event,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { event: Event }) {
  const { title, date, image, alt, description } = event;
  return (
    <Card className={cn("w-full", props.className)} {...props}>
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
