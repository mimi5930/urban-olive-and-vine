import { Link } from "@remix-run/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { CalendarIcon } from "./svg";
import { type Event } from "./Events";
import createEventCalendarLinks from "~/lib/addToCalendar";
import { SerializeFrom } from "@remix-run/node";
import { Button } from "./ui/button";

export default function AddToCalendarButton({
  currentEvent,
}: {
  currentEvent: SerializeFrom<Event>;
}) {
  const calendarLinks: { [key: string]: { title: string; link: string } } =
    createEventCalendarLinks(currentEvent);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="mt-5 flex gap-2">
          <CalendarIcon />
          <p>Save Event</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(calendarLinks).map((objKey, index) => {
          return (
            <Link
              className="hover:cursor-pointer hover:underline"
              to={calendarLinks[objKey].link}
              key={index}
            >
              <DropdownMenuItem>{calendarLinks[objKey].title}</DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
