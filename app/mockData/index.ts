import { Event } from "~/components/Events";
import events from "./urban-events.json";
import picture from "~/img/sample-musician.jpg";
import landScapePic from "~/img/musician.jpg";

const nonImageEvents: Omit<Event, "image">[] = events;
const mockEvents: Event[] = [];

nonImageEvents.forEach((currentEvent) => {
  mockEvents.push({ ...currentEvent, image: landScapePic });
});

export { mockEvents };
