import picture from "~/img/eat.jpg";
import picture2 from "~/img/enjoy.jpg";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function CallToAction() {
  return (
    <section className="min-h-[50vh] py-20">
      <div className="flex h-1/2 flex-col items-center justify-evenly gap-10 bg-eggshell-50 p-12 lg:flex-row lg:gap-0">
        <div className="max-w-96 shadow-xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex h-3/4 max-w-[80%] flex-col items-center justify-center gap-5 lg:w-1/4 lg:max-w-none">
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
      <div className="flex h-1/2 flex-col items-center justify-evenly gap-10 bg-eggshell-50 p-12 lg:flex-row-reverse lg:gap-0">
        <div className="max-w-96 shadow-2xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture2}
            alt=""
          />
        </div>
        <div className="flex h-3/4 max-w-[80%] flex-col items-center justify-center gap-5 lg:w-1/4 lg:max-w-none">
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
      </div>
    </section>
  );
}
