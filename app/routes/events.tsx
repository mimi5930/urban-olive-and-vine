import { useEffect, useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { mockEvents } from "../mockData";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";
import picture from "../img/musician.jpg";
import { type DayContentProps } from "react-day-picker";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Link } from "@remix-run/react";
import { cva, type VariantProps } from "class-variance-authority";

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
            // modifiersClassNames={{ electric: "bg-red" }}
            // !
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
              DayContent: CustomDayContent,
            }}
          />
        </Card>
      </div>
    </section>
  );
}

export function CustomDayContent(props: DayContentProps) {
  const dayDisplayVariants = cva(cn(buttonVariants({ variant: "ghost" }), ""), {
    variants: {
      variant: {
        default:
          "size-24 p-0 font-normal hover:bg-feldgrau hover:text-white aria-selected:opacity-100",
        electric:
          "size-24 p-0 font-normal hover:bg-red hover:text-white aria-selected:opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

  console.log(props.activeModifiers);

  const hasElectric = () => {
    if ("electric" in props.activeModifiers) {
      return "electric";
    } else {
      return "default";
    }
  };

  return (
    <span className={dayDisplayVariants({ variant: hasElectric() })}>
      {props.date.getDate()}
    </span>
  );
}
