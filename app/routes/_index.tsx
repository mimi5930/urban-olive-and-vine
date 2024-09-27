import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Navbar } from "~/components";
import { Button } from "~/components/ui/button";
import image from "~/img/restaurant-min.jpg";
import image2 from "~/img/restaurant -2.jpg";
import wineClinkImg from "~/img/wine-clink.jpg";

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
  const [currentHeroImg, setCurrentHeroImg] = useState<number>(0);

  const next = () => {
    currentHeroImg === 1
      ? setCurrentHeroImg(0)
      : setCurrentHeroImg(currentHeroImg + 1);
  };

  return (
    <section className="box-border h-screen w-screen bg-eggshell">
      <Navbar />
      <section id="hero" className="relative mt-5 h-1/2 w-screen shadow">
        <div className="flex h-full w-full overflow-hidden">
          <div
            className="relative block h-full w-full flex-shrink-0 flex-grow-0 transition duration-500"
            style={{
              transform: `translate(${-100 * currentHeroImg}%)`,
            }}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-evenly">
              <div className="flex h-1/2 w-1/5 flex-col items-center justify-center gap-5">
                <h2 className="text-5xl font-extrabold text-eggshell-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Who are we?
                </h2>
                <p className="text-lg font-medium text-eggshell-50">
                  Lorem ipsum dolor sit amet. Lora
                </p>
              </div>
              <div id="imageContainer" className="h-1/2 w-1/5 shadow-lg">
                <img src={wineClinkImg} alt="" className="h-full w-full" />
              </div>
            </div>
          </div>
          <img
            src={image2}
            alt=""
            className="block h-full w-full flex-shrink-0 flex-grow-0 object-cover transition duration-500 ease-in"
            style={{
              transform: `translate(${-100 * currentHeroImg}%)`,
            }}
          />
        </div>
      </section>
      <Button onClick={next}>Next</Button>
    </section>
  );
}
