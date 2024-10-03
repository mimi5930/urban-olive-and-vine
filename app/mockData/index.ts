import { Event } from "~/components/Events";
import events from "./urban-events.json";
import picture from "~/img/sample-musician.jpg";

const nonImageEvents: Omit<Event, "image">[] = events;
const mockEvents: Event[] = [];

nonImageEvents.forEach((currentEvent) => {
  mockEvents.push({ ...currentEvent, image: picture });
});

export { mockEvents };
