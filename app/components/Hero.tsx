import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Circle } from "./svg";
import image from "../img/restaurant-min.jpg";
import image2 from "../img/restaurant -2.jpg";
import image3 from "../img/restaurant-3.jpg";
import musician from "../img/musician.jpg";
import wineClinkImg from "../img/wine-clink.jpg";
import { cn } from "~/lib/utils";
import { ImageHeadingText } from "./Text";

export type Slides = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  linkButton?: React.ReactNode;
  media: React.ReactNode;
}[];

const slides: Slides = [
  {
    image: image,
    alt: "",
    title: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet. Lora",
    linkButton: <Button>Lorem</Button>,
    media: (
      <img
        src={wineClinkImg}
        alt=""
        className="h-full w-full rounded-xl shadow-lg"
      />
    ),
  },
  {
    image: image2,
    alt: "",
    title: "Lorem, ipsum dolor. 2",
    description: "Lorem ipsum dolor sit amet. Lora 2",
    linkButton: <Button>Lorem2</Button>,
    media: (
      <img
        src={wineClinkImg}
        alt=""
        className="h-full w-full rounded-xl shadow-lg"
      />
    ),
  },
  {
    image: image3,
    alt: "",
    title: "Lorem, ipsum dolor. 3",
    description: "Lorem ipsum dolor sit amet. Lora 3",
    linkButton: <Button>Lorem3</Button>,
    media: (
      <img
        src={musician}
        alt=""
        className="h-full w-full rounded-xl shadow-lg"
      />
    ),
  },
];

export default function Hero() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeroSlide((currentSlide) => {
        return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      });
      console.log("interval ran!");
    }, 10_000);

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, [currentHeroSlide]); // reset interval when there's an interaction with the sate change

  return (
    <HeroContainer>
      {slides.map(
        ({ image, alt, title, description, linkButton, media }, index) => {
          return (
            <ImageContainer currentHeroSlide={currentHeroSlide} key={index}>
              <HeroImage src={image} alt={alt} />
              <HeroContent
                title={title}
                description={description}
                linkButton={linkButton}
                media={media}
              />
            </ImageContainer>
          );
        },
      )}
      <HeroContentArrows
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
        slideAmount={slides.length}
      />
      <HeroContentCircles
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
        slides={slides}
      />
    </HeroContainer>
  );
}

export function HeroContainer({
  children,
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section className="relative h-[90vh] w-full md:h-[60vh]">
      <div className="flex h-full w-full overflow-clip">{children}</div>
    </section>
  );
}
HeroContainer.displayName = "HeroContainer";

export function ImageContainer({
  children,
  currentHeroSlide,
}: React.ComponentPropsWithoutRef<"div"> & { currentHeroSlide: number }) {
  return (
    <div
      className="relative box-border h-full w-full flex-shrink-0 flex-grow-0 transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${-100 * currentHeroSlide}%)`,
      }}
    >
      {children}
    </div>
  );
}

export function HeroImage({
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  alt,
  ...props
}: React.ComponentPropsWithoutRef<"img">) {
  return (
    <img
      className={cn("h-full w-full object-cover brightness-50", className)}
      {...props}
      alt={alt}
    />
  );
}

// TODO Make linkButton and media props more specific?
export type HeroContentProps = React.ComponentPropsWithoutRef<"div"> &
  Omit<Slides[1], "image" | "alt">;

export function HeroContent({
  title,
  description,
  linkButton,
  media,
  ...props
}: HeroContentProps) {
  return (
    <div
      className="absolute bottom-0 left-0 flex h-full w-full flex-col items-center justify-evenly lg:flex-row"
      {...props}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 lg:w-1/3 lg:items-start">
        <ImageHeadingText className="text-center">{title}</ImageHeadingText>
        {description && (
          <p className="text-start text-lg font-medium text-eggshell-50">
            {description}
          </p>
        )}
        {linkButton && linkButton}
      </div>
      <div className="rounded-xlg mb-10 h-2/5 px-2 lg:mb-0 lg:h-1/2 lg:px-0">
        {media}
      </div>
    </div>
  );
}

export type HeroContentArrowProps = React.HTMLAttributes<HTMLButtonElement> & {
  currentHeroSlide: number;
  setCurrentHeroSlide: React.Dispatch<React.SetStateAction<number>>;
  slideAmount: number;
};

export function HeroContentArrows({
  children,
  currentHeroSlide,
  setCurrentHeroSlide,
  slideAmount,
  ...props
}: HeroContentArrowProps) {
  const prev = () => {
    currentHeroSlide === 0
      ? setCurrentHeroSlide(slideAmount - 1)
      : setCurrentHeroSlide(currentHeroSlide - 1);
  };

  const next = () => {
    currentHeroSlide === slideAmount - 1
      ? setCurrentHeroSlide(0)
      : setCurrentHeroSlide(currentHeroSlide + 1);
  };

  return (
    <>
      <button
        className="group absolute right-0 flex h-full w-1/6 items-center transition-colors duration-500 hover:bg-black/15 lg:w-1/12"
        onClick={next}
        {...props}
      >
        {children}
        <ChevronRightIcon className="transition-translate absolute right-0 mr-5 box-border text-eggshell duration-500 group-hover:scale-125" />
      </button>
      <button
        className="group absolute left-0 flex h-full w-1/6 items-center transition-colors duration-500 hover:bg-black/15 lg:w-1/12"
        onClick={prev}
        {...props}
      >
        <ChevronLeftIcon className="transition-translate absolute left-0 ml-5 box-border text-eggshell duration-500 group-hover:scale-125" />
        {children}
      </button>
    </>
  );
}

export type HeroContentCirclesProps = React.HTMLAttributes<HTMLDivElement> & {
  slides: Slides;
  currentHeroSlide: number;
  setCurrentHeroSlide: React.Dispatch<React.SetStateAction<number>>;
};

export function HeroContentCircles({
  slides,
  currentHeroSlide,
  setCurrentHeroSlide,
  ...props
}: HeroContentCirclesProps) {
  return (
    <div
      className="absolute bottom-0 flex w-full justify-center gap-1 p-2"
      {...props}
    >
      {slides.map((_, index) => {
        return (
          <button key={index} onClick={() => setCurrentHeroSlide(index)}>
            <Circle
              className={`h-3 w-3 stroke-eggshell-200 ${currentHeroSlide >= index ? "fill-eggshell-200" : ""}`}
            ></Circle>
          </button>
        );
      })}
    </div>
  );
}
