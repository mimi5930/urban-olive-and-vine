import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CallToAction, Events, Hero } from "~/components";
import { mockEvents } from "~/mockData";

export const meta: MetaFunction = () => {
  return [
    { title: "Urban Olive & Vine" },
    {
      name: "description",
      content: "Welcome to Hudson's Urban Olive and Vine",
    },
  ];
};

export async function loader() {
  console.log("ran home page loader");

  // organize events
  const organizedMockEvents = mockEvents.sort((a, b) => {
    if (new Date(a.startTime) > new Date(b.startTime)) {
      return 1;
    } else if (new Date(a.startTime) < new Date(b.startTime)) {
      return -1;
    }
    return 0;
  });

  // show only events after today
  const currentDate = new Date();
  const filteredEvents = organizedMockEvents.filter((event) => {
    return (
      // event date
      new Date(event.startTime) >
      // current date - 1
      new Date(currentDate.setDate(currentDate.getDate() - 1))
    );
  });

  return json(filteredEvents.slice(0, 4));
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="m-h-screen w-full">
      <Hero />
      <CallToAction />
      <Events events={data} />
    </section>
  );
}
