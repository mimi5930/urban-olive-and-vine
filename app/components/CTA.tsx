import picture from "~/img/eat.jpg";
import picture2 from "~/img/enjoy.jpg";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function CallToAction() {
  return (
    <section className="flex min-h-[50vh] flex-col justify-evenly py-20 xl:flex-row">
      <div className="flex h-1/2 flex-col items-center gap-28 p-12">
        <div className="max-w-96 shadow-xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex h-3/4 w-auto flex-col items-center justify-center gap-5 sm:w-[31.25rem]">
          <h2 className="text-5xl">Eat</h2>
          <p>
            We craft our food from scratch using only the freshest ingredients.
            We offer a variety of gluten-free, vegetarian, and vegan options to
            accommodate all dietary needs. Additionally, our special menu
            changes frequently, showcasing seasonal ingredients and creative
            culinary innovations. Enjoy!
          </p>
          <Link to="/menu">
            <Button>See Our Menu</Button>
          </Link>
        </div>
      </div>
      <div className="flex h-1/2 flex-col-reverse items-center gap-28 p-12 xl:flex-col">
        <div className="flex h-3/4 w-auto flex-col items-center justify-center gap-5 sm:w-[31.25rem]">
          <h2 className="text-5xl">Enjoy</h2>
          <p className="text-center text-xl">LIVE MUSIC ON WEEKENDS</p>
          <p>
            Live music on Thursday, Friday & Saturday evenings. Enjoy the
            vibrant energy and talent of local musicians as you unwind. Schedule
            subject to change.
          </p>
          <Link to="/events">
            <Button>Live Music</Button>
          </Link>
        </div>
        <div className="max-w-96 shadow-2xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
