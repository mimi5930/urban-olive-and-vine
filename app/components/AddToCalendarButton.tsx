import { Link } from "@remix-run/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { CalendarIcon } from "./svg";
import { type Event } from "./Events";
import createEventCalendarLinks from "~/lib/addToCalendar";
import { SerializeFrom } from "@remix-run/node";

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
        <CalendarIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Add Event to</DropdownMenuLabel>
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
