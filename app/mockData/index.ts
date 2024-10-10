import { type Event } from "~/components/Events";
import events from "./urban-events.json";
// import picture from "~/img/sample-musician.jpg";
import landScapePic from "~/img/musician.jpg";
import specials from "./urban-specials.json";

const mockSpecials = specials[0];
const nonImageEvents: Omit<Event, "image" | "endTime">[] = events;
const mockEvents: Event[] = [];

nonImageEvents.forEach((currentEvent) => {
  const startTime = new Date(currentEvent.startTime);
  mockEvents.push({
    ...currentEvent,
    image: landScapePic,
    startTime: new Date(currentEvent.startTime).toISOString(),
    endTime: new Date(
      startTime.setTime(startTime.getTime() + 7200000), //add two hours
    ).toISOString(),
  });
});

export { mockEvents, mockSpecials };
