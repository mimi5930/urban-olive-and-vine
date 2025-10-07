import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { cn, imageDateText, mediumDateText, timeDateText } from "~/lib/utils";
import { Link } from "react-router";
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
  // This line was previously: }: React.ComponentPropsWithoutRef<"div"> & { events: SerializeFrom<Event[]> }) {
}: React.ComponentPropsWithoutRef<"div"> & { events: Event[] }) {
  return (
    <section
      className={cn(
        "flex min-h-[50vh] flex-col items-center gap-24 bg-feldgrau-900 p-12 py-40",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-5 text-eggshell-50">
        {/* <div className="w-10 border-b-2 border-eggshell-50" /> */}
        <h1 className="text-center text-6xl sm:text-7xl">
          Upcoming <span className="text-logo-green">Events</span>
        </h1>
        {/* <div className="w-10 border-b-2 border-eggshell-50" /> */}
      </div>
      <div className="max-w-7xl text-lg text-eggshell-50">
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
          <Link className="underline" to="#location">
            Contact us
          </Link>{" "}
          if you would like to play
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {events.map(({ title, startTime, id, image, alt }, index) => {
          const startTimeAsDate = new Date(startTime);
          return (
            <Link
              className="flex flex-col items-center p-5 text-center text-eggshell-50 transition-transform hover:scale-105"
              key={index}
              to={`/events?event=${id}`}
            >
              <div className="relative aspect-square max-w-sm shadow-xl">
                <img
                  src={image}
                  alt={alt}
                  className="size-full rounded-md object-cover"
                />
                <div className="absolute right-2 top-2 rounded-sm bg-feldgrau p-6 text-xl font-semibold text-eggshell-50 shadow-lg">
                  {imageDateText(startTimeAsDate)}
                </div>
              </div>
              <h3 className="text-lg font-semibold">{`${title} @ ${timeDateText(startTimeAsDate)}`}</h3>
            </Link>
          );
        })}
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
  // TODO: Change event back to what it used to be }: React.HTMLAttributes<HTMLDivElement> & { event: SerializeFrom<Event> }) {
}: React.HTMLAttributes<HTMLDivElement> & { event: Event }) {
  // TODO: will run into issues with rendering serialized jsx. Figure this out later lol
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
        <Link to={`/events/?event=${id}`}>
          <Button>Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
EventCard.displayName = "EventCard";

// export function EventDescription({
//   description,
// }: {
//   description: string | React.ReactElement[];
// }) {
//   if (typeof description === "string") {
//     return <p className="justify-self-start text-ellipsis">{description}</p>;
//   } else {
//     return (
//       <>
//         {description.map((el, i) => {
//           if (React.isValidElement(el) && el.type === "p") {
//             const typedEl = el as React.ReactElement<
//               React.HTMLAttributes<HTMLParagraphElement>,
//               "p"
//             >;
//             const existingClass = typedEl.props.className || "";
//             const defaultClass = "justify-self-start text-ellipsis";
//             return React.cloneElement(typedEl, {
//               key: i,
//               className: `${defaultClass} ${existingClass}`.trim(),
//             });
//           }
//           return null;
//         })}
//       </>
//     );
//   }
// }
// EventDescription.displayName = "EventDescription";
