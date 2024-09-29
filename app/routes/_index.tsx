import type { MetaFunction } from "@remix-run/node";
import { CallToAction, Events, Hero, Navbar, Footer } from "~/components";

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
      <Navbar />
      <Hero />
      <CallToAction />
      <Events />
      <Footer />
    </section>
  );
}
