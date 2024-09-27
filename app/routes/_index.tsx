import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Navbar } from "~/components";
import image from "~/img/restaurant-min.jpg";
import image2 from "~/img/restaurant -2.jpg";
import wineClinkImg from "~/img/wine-clink.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "~/components/svg";
import { Button } from "~/components/ui/button";

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

  const prev = () => {
    currentHeroImg === 0
      ? setCurrentHeroImg(1)
      : setCurrentHeroImg(currentHeroImg - 1);
  };

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
            className="relative box-border h-full w-full flex-shrink-0 flex-grow-0 transition-transform duration-500"
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
              <div className="flex h-1/2 w-1/5 flex-col items-start justify-center gap-5">
                <h2 className="text-start text-5xl font-extrabold text-eggshell-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Lorem, ipsum dolor.
                </h2>
                <p className="text-start text-lg font-medium text-eggshell-50">
                  Lorem ipsum dolor sit amet. Lora
                </p>
                <Button>Lorem</Button>
              </div>
              <div id="imageContainer" className="h-1/2 w-1/5 shadow-lg">
                <img src={wineClinkImg} alt="" className="h-full w-full" />
              </div>
            </div>
          </div>
          <div
            className="relative box-border h-full w-full flex-shrink-0 flex-grow-0 transition-transform duration-500"
            style={{
              transform: `translate(${-100 * currentHeroImg}%)`,
            }}
          >
            <img
              src={image2}
              alt=""
              className="h-full w-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-evenly">
              <div className="flex h-1/2 w-1/5 flex-col items-center justify-center gap-5">
                <h2 className="text-center text-5xl font-extrabold text-eggshell-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                  Lorem, ipsum dolor.
                </h2>
                <p className="text-center text-lg font-medium text-eggshell-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium, hic ex doloremque ducimus consequatur fuga veniam
                  consectetur. Quod, quisquam nulla?
                </p>
                <Button>Test</Button>
              </div>
              <div id="imageContainer" className="h-1/2 w-1/5 shadow-lg">
                <img src={wineClinkImg} alt="" className="h-full w-full" />
              </div>
            </div>
          </div>
          <button
            className="group absolute left-0 flex h-full w-1/12 items-center transition-colors duration-500 hover:bg-black/15"
            onClick={prev}
          >
            <ChevronLeftIcon className="transition-translate absolute left-0 ml-5 box-border text-eggshell duration-500 group-hover:scale-125" />
          </button>
          <button
            className="group absolute right-0 flex h-full w-1/12 items-center transition-colors duration-500 hover:bg-black/15"
            onClick={next}
          >
            <ChevronRightIcon className="transition-translate absolute right-0 mr-5 box-border text-eggshell duration-500 group-hover:scale-125" />
          </button>
        </div>
      </section>
    </section>
  );
}
