import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { CallToAction, Events, Hero } from "~/components";
import { Hours } from "~/components/Location";
import mapPic from "~/img/urban-map.png";
import { Button } from "~/components/ui/button";
import { CompassIcon, MailIcon, PhoneIcon } from "~/components/svg";
import { hours, urbanSummerEvents } from "~/data";
import { upcomingEvents } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Urban Olive & Vine" },
    {
      name: "description",
      content: "Welcome to Hudson's Urban Olive and Vine",
    },
  ];
};

//* Loader function ()
// export async function loader() {
//   console.log("ran home page loader");

//   // organize events
//   const organizedMockEvents = mockEvents.sort((a, b) => {
//     if (new Date(a.startTime) > new Date(b.startTime)) {
//       return 1;
//     } else if (new Date(a.startTime) < new Date(b.startTime)) {
//       return -1;
//     }
//     return 0;
//   });

//   // show only events after today
//   const currentDate = new Date();
//   const filteredEvents = organizedMockEvents.filter((event) => {
//     return (
//       // event date
//       new Date(event.startTime) >
//       // current date - 1
//       new Date(currentDate.setDate(currentDate.getDate() - 1))
//     );
//   });

//   // gather restaurant hours
//   const hours = mockHours;

//   return json({ events: filteredEvents.slice(0, 3), hours: hours });
// }

// ! TODO Change to uppercase, so it's registered as a component!
export default function Index() {
  // const data = useLoaderData<typeof loader>();
  const urbanHours = hours;

  const urbanEvents = upcomingEvents(urbanSummerEvents);

  return (
    <section className="min-h-screen w-full">
      <Hero />
      <CallToAction />
      <Events events={urbanEvents} />
      <section className="min-h-[40vh] p-10" id="location">
        <Hours hours={urbanHours} />
        <div className="flex flex-col items-center justify-center gap-14 py-24 lg:flex-row lg:items-stretch">
          <div className="group relative h-[31.25rem] max-w-lg overflow-clip rounded-md lg:h-auto lg:w-1/3">
            <img
              className="size-full object-cover blur-[2px] transition-transform duration-500 group-hover:scale-105"
              src={mapPic}
              alt=""
            />
            <div className="absolute top-0 size-full bg-feldgrau opacity-40 shadow-lg ring-2 ring-feldgrau brightness-50"></div>
            <div className="absolute top-0 flex size-full flex-col items-center justify-center gap-2 p-2 text-eggshell-50">
              <h2 className="text-3xl font-bold">Find Us</h2>
              <a
                className="group/link flex gap-2"
                href="https://maps.app.goo.gl/sdZB1NJcqNT9wXKLA"
              >
                <CompassIcon />
                <p className="group-hover/link:underline">
                  520 2nd St, Hudson, WI 54016
                </p>
              </a>
              <p className="text-center">
                Why wait any longer? Come and join us at Urban Olive & Vine—your
                ultimate sanctuary for delicious food, fine wines, and
                unforgettable experiences. Dive into our vibrant atmosphere,
                savor every moment, and let the good times flow!
              </p>
              <a href="https://maps.app.goo.gl/sdZB1NJcqNT9wXKLA">
                <Button size="lg">Open in Maps</Button>
              </a>
            </div>
          </div>
          <div className="flex h-[31.25rem] max-w-lg flex-col items-center justify-center gap-5 rounded-md bg-feldgrau text-eggshell-50 shadow-lg ring-2 ring-feldgrau lg:h-auto lg:w-1/3">
            <h2 className="text-3xl">Contact Us</h2>
            <div className="flex flex-col items-center text-lg">
              <MailIcon />
              <span className="sr-only">Email</span>
              <a
                className="text-sm hover:underline sm:text-lg"
                href="mailto:chadandcarol@urbanoliveandvine.com"
              >
                chadandcarol@urbanoliveandvine.com
              </a>
            </div>
            <div className="flex flex-col items-center text-lg">
              <PhoneIcon />
              <span className="sr-only">Phone Number</span>
              <a className="hover:underline" href="tel:7153860400">
                715.386.0400
              </a>
            </div>
            <p className="px-4 text-center text-sm">
              We do not accept reservations and look forward to welcoming you on
              a first-come, first-served basis.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
