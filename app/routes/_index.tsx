import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CallToAction, Events, Footer, Hero } from "~/components";
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
    if (new Date(a.date) > new Date(b.date)) {
      return 1;
    } else if (new Date(a.date) < new Date(b.date)) {
      return -1;
    }
    return 0;
  });

  // show only events after today
  const currentDate = new Date();
  const filteredEvents = organizedMockEvents.filter((event) => {
    return (
      // event date
      new Date(event.date) >
      // current date - 1
      new Date(currentDate.setDate(currentDate.getDate() - 1))
    );
  });

  return json(filteredEvents.slice(0, 4));
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="h-screen w-full">
      <Hero />
      <CallToAction />
      <Events events={data} />
      <Footer />
    </section>
  );
}
