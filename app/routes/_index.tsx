import type { MetaFunction } from "@remix-run/node";
import { CallToAction, Events, Footer, Hero } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Urban Olive & Vine" },
    {
      name: "description",
      content: "Welcome to Hudson's Urban Olive and Vine",
    },
  ];
};

export default function Index() {
  return (
    <section className="h-screen w-full">
      <Hero />
      <CallToAction />
      <Events />
      <Footer />
    </section>
  );
}
