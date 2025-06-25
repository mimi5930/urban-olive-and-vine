import { SerializeFrom } from "react-router";
import { type Event } from "../components/Events";
import {
  google,
  outlook,
  office365,
  yahoo,
  ics,
  CalendarEvent,
} from "calendar-link";

export default function createEventCalendarLinks(event: SerializeFrom<Event>) {
  const calendarEvent: CalendarEvent = {
    title: event.title,
    description: event.description,
    start: event.startTime,
    end: event.endTime,
    location: "Urban Olive & Vine, 520 2nd St, Hudson, WI 54016, USA",
  };
  return {
    google: {
      title: "Google Calendar",
      link: google(calendarEvent),
    },
    outlook: {
      title: "Outlook Calendar",
      link: outlook(calendarEvent),
    },
    yahoo: { title: "Yahoo Calendar", link: yahoo(calendarEvent) },
    office365: { title: "Office 365", link: office365(calendarEvent) },
    ics: { title: "ICalendar", link: ics(calendarEvent) },
  };
}

// export interface AddToCalendarEvent {
//   title: string;
//   description: string;
//   date: string;
//   location: string;
// }

// export function addToGoogleCalendar(event: AddToCalendarEvent) {
//   const { title, description, date, location } = event;
//   // TODO: Configure event time to have start and end time
//   // TEMPLATE `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&dates=${startTime}/${endTime}&location=LOCATION`;
//   return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&dates=${date}&location=${location}`;
// }

// export function addToOutlookCalendar(event: AddToCalendarEvent) {
//   const { title, description, date, location } = event;
//   // TEMPLATE https://outlook.office.com/0/calendar/action/compose?startdt=20231026T160000&enddt=20231026T170000&subject=Your%20Event%20Title&location=Event%20Location&body=Event%20Description
//   return `https://outlook.office.com/0/calendar/action/compose?startdt=${date}&subject=${title}&location=${location}&body=${description}`;
// }
// export function addToYahooCalendar(event: AddToCalendarEvent) {
//   const { title, description, date, location } = event;
//   // TEMPLATE https://calendar.yahoo.com/v60/add?title=Your%20Event%20Title&location=Event%20Location&details=Event%20Description&date=20231026T160000&endDate=20231026T170000
//   return `https://calendar.yahoo.com/v60/add?title=${title}&location=${location}&details=${description}&date=${date}`;
// }

// export function addToHotmailCalendar(event: AddToCalendarEvent) {
//   const { title, description, date, location } = event;
//   // TEMPLATE https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=20231026T160000&enddt=20231026T170000&subject=Your%20Event%20Title&body=Event%20Description&location=Event%20Location
//   return `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=${date}&subject=${title}&body=${description}&location=${location}`;
// }
