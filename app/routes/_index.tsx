import type { MetaFunction } from "@remix-run/node";
import { Hero, Navbar } from "~/components";

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
    <section className="box-border h-screen w-screen bg-eggshell">
      <Navbar />
      <Hero />
    </section>
  );
}
