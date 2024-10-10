import picture from "~/img/eat.jpg";
import picture2 from "~/img/enjoy.jpg";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function CallToAction() {
  return (
    <section className="h-[50vh]">
      <div className="flex h-1/2 items-center justify-evenly bg-eggshell-50 p-12">
        <div className="w-96 shadow-2xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex h-3/4 w-1/4 flex-col items-center justify-center gap-5">
          <h2 className="text-5xl">Eat</h2>
          <p>
            We make our food from scratch with fresh ingredients. Many
            gluten-free, vegetarian and vegan options are available. We also
            have a special menu that changes often.
          </p>
          <Link to="/menu">
            <Button>See Our Menu</Button>
          </Link>
        </div>
      </div>
      <div className="flex h-1/2 flex-row-reverse items-center justify-evenly bg-eggshell-50 p-12">
        <div className="w-96 shadow-2xl">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={picture2}
            alt=""
          />
        </div>
        <div className="flex h-3/4 w-1/4 flex-col items-center justify-center gap-5">
          <h2 className="text-5xl">Enjoy</h2>
          <p>LIVE MUSIC ON WEEKENDS</p>
          <p>
            Live music on Thursday, Friday & Saturday evenings. Schedule subject
            to change. If you are interested in playing here contact Chad.
          </p>
          <Link to="/events">
            <Button>Live Music</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
