import { useEffect, useState } from "react";
import { EventCard } from "~/components/Events";
import { Button, buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { mockEvents } from "../mockData";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";

export default function events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // TODO: Remove this test
  const { title, date: eventDate, image, alt, description } = mockEvents[0];

  return (
    <section className="mt-32 flex w-full flex-col">
      <h1 className="text-center text-5xl">Events</h1>
      <div className="flex justify-center gap-5 p-5">
        <div className="aspect-video flex-1">
          <img
            className="size-full rounded-xl object-cover shadow-xl"
            src={image}
            alt={alt}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <h2 className="text-1xl">{eventDate}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Card>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="flex h-full w-full p-5"
            classNames={{
              months:
                "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
              month: "space-y-4 w-full flex flex-col",
              table: "w-full h-full border-collapse space-y-1",
              head_row: "",
              row: "w-full mt-2",
              cell: "",
              caption_label: "text-xl font-medium",
              day: cn(
                buttonVariants({ variant: "ghost" }),
                "size-24 p-0 font-normal aria-selected:opacity-100 hover:bg-feldgrau hover:text-white",
              ),
              day_today: cn(
                buttonVariants({ variant: "default" }),
                "bg-logo-green size-24",
              ),
              day_selected:
                "bg-feldgrau text-primary-foreground hover:bg-feldgrau hover:text-primary-foreground focus:bg-feldgrau focus:text-primary-foreground",
              head_cell: "rounded-md w-8 font-semi-bold text-lg",
              tbody: "text-center",
            }}
            components={{
              IconLeft: () => <ChevronLeftIcon className="size-8" />,
              IconRight: () => <ChevronRightIcon className="size-8" />,
            }}
          />
        </Card>
      </div>
    </section>
  );
}
