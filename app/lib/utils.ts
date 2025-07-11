import { SerializeFrom } from "react-router";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Event } from "~/components/Events";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function upcomingEvents(events: Event[]) {
  // today's time set it to beginning of day as well if an event is currently happening
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // filtered array
  const eventsAfterToday = events.filter((event) => {
    return new Date(event.startTime) >= today;
  });
  // return first two events in list
  return [eventsAfterToday[0], eventsAfterToday[1]];
}

export function findEventById(
  id: string | undefined,
  events: SerializeFrom<Event[]>,
) {
  if (!id) {
    return undefined;
  }
  return events.find((event) => {
    return event.id === Number(id);
  });
}

export function findEventTimeById(id: string, events: SerializeFrom<Event[]>) {
  return events.find((event) => {
    return event.id === Number(id);
  })?.startTime;
}

export function groupObjectsByTitle(objectsArray: SerializeFrom<Event[]>): {
  [key: string]: Date[];
} {
  const groupedObjects: { [key: string]: Date[] } = {};
  objectsArray.forEach((obj) => {
    const dateObject = new Date(obj.startTime);
    if (!groupedObjects[obj.title]) {
      groupedObjects[obj.title] = [];
    }
    groupedObjects[obj.title].push(dateObject);
  });
  // Sort the dates in ascending order for each title
  for (const title in groupedObjects) {
    groupedObjects[title].sort((a, b) => a.getTime() - b.getTime());
  }
  return groupedObjects;
}

export function mediumDateText(date: Date) {
  return date.toLocaleString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export function longDateText(date: Date) {
  return date.toLocaleString(undefined, {
    dateStyle: "full",
    timeStyle: "short",
  });
}

export function shortDateText(date: Date) {
  return date.toLocaleString(undefined, {
    month: "long",
    day: "2-digit",
  });
}

export function imageDateText(date: Date) {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
  });
}

export function timeDateText(date: Date) {
  return date.toLocaleString(undefined, {
    timeStyle: "short",
  });
}

export function displayMonthText(date: Date) {
  return date.toLocaleString(undefined, { month: "long" });
}

export function findEventByDateAndTitle(
  date: Date,
  title: string,
  events: Event[],
) {
  const event = events.find((event) => {
    return sameDay(date, new Date(event.startTime)) && title === event.title;
  });
  return `${event?.id}`;
}

export function modifyDateMonth(
  date: Date,
  amount: number,
  modifier: "add" | "subtract",
) {
  const newDate = new Date(date);
  if (modifier === "add") {
    newDate.setMonth(newDate.getMonth() + amount);
  } else {
    newDate.setMonth(newDate.getMonth() - amount);
  }
  return newDate;
}
