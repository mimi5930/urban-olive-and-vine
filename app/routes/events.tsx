import { useState } from "react";
import { buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { mockEvents } from "../mockData";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";
import picture from "~/img/musician.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Link } from "@remix-run/react";

export default function events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // TODO: Remove this test
  const { title, date: eventDate, image, alt, description } = mockEvents[0];

  const electricBananas = mockEvents.filter((event) => {
    if (event.title.includes("Electric Bananas")) {
      return true;
    }
  });

  const electricBananasDates: Date[] = [];
  electricBananas.forEach((event) => {
    electricBananasDates.push(new Date(event.date));
  });

  console.log(electricBananasDates);

  return (
    <section className="mt-32 flex w-full flex-col">
      <h1 className="pb-5 text-center text-5xl">Events</h1>
      <h2 className="text-center text-5xl">
        {date?.toLocaleString(undefined, {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}
      </h2>
      <div className="flex justify-center gap-5 p-5">
        <div className="aspect-video max-h-[30vh] w-5/12">
          <img
            className="size-full rounded-xl object-cover shadow-xl"
            src={image}
            alt={alt}
          />
        </div>
        <div className="w-5/12">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <h2 className="text-1xl">{eventDate}</h2>
          <p>{description}</p>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            libero repellat aspernatur, reiciendis accusantium itaque cumque
            earum, sequi delectus rem non, ullam numquam impedit molestias
            quisquam minima velit fuga aliquid culpa nemo officiis vitae
            pariatur? Sequi, eveniet eum! Assumenda, deleniti!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            libero repellat aspernatur, reiciendis accusantium itaque cumque
            earum, sequi delectus rem non, ullam numquam impedit molestias
            quisquam minima velit fuga aliquid culpa nemo officiis vitae
            pariatur? Sequi, eveniet eum! Assumenda, deleniti!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            libero repellat aspernatur, reiciendis accusantium itaque cumque
            earum, sequi delectus rem non, ullam numquam impedit molestias
            quisquam minima velit fuga aliquid culpa nemo officiis vitae
            pariatur? Sequi, eveniet eum! Assumenda, deleniti!
          </p> */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Hear {title} Another Night</AccordionTrigger>
              <AccordionContent>
                <Link className="hover:underline" to="/events">
                  {eventDate}
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link className="hover:underline" to="/events">
                  {eventDate}
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Card>
          <Calendar
            mode="single"
            required
            selected={date}
            onSelect={setDate}
            // !MODIFIERS!
            modifiers={{ electric: electricBananasDates }}
            // modifiersStyles={{
            //   electric: {
            //     color: "white",
            //   },
            // }}
            // modifiersClassNames={{ electric: styles.musicianDate }}
            // !
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
              day: "relative z-20 p-0 text-center text-sm focus-within:relative focus-within:z-20 focus-within:rounded-md [&:has([aria-selected])]:bg-feldgrau [&:has([aria-selected].day-outside)]:bg-feldgrau/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
              today: cn(
                buttonVariants({ variant: "default" }),
                "size-24 p-0 bg-logo-green size-24 hover:bg-logo-green-800",
              ),
              selected:
                "bg-feldgrau text-primary-foreground hover:bg-feldgrau hover:text-primary-foreground focus:bg-feldgrau focus:text-primary-foreground",
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
                return (
                  <td {...dayProps}>
                    {children}
                    {dayProps.modifiers.electric && (
                      <div className="pointer-events-none absolute top-0 size-full opacity-50">
                        <img
                          className="size-full object-cover blur-[2px]"
                          src={picture}
                          alt=""
                        />
                      </div>
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
