import { type Event } from "~/components/Events";
import events from "./urban-events.json";
import picture from "~/img/sample-musician.jpg";
import landScapePic from "~/img/musician.jpg";
import specials from "./urban-specials.json";

const mockSpecials = specials[0];
const nonImageEvents: Omit<Event, "image">[] = events;
const mockEvents: Event[] = [];

nonImageEvents.forEach((currentEvent) => {
  mockEvents.push({ ...currentEvent, image: landScapePic });
});

export { mockEvents, mockSpecials };
