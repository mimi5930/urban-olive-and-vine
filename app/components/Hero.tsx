import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Circle } from "./svg";
import image from "../img/restaurant-min.jpg";
import image2 from "../img/restaurant -2.jpg";
import image3 from "../img/restaurant-3.jpg";
import musician from "../img/musician.jpg";
import wineClinkImg from "../img/wine-clink.jpg";
import { cn } from "~/lib/utils";

type ChildProps = {
  children: React.ReactNode;
};

export type Slides = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  linkButton?: React.ReactNode;
  media: React.ReactNode;
}[];

export default function Hero() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);

  const slides: Slides = [
    {
      image: image,
      alt: "",
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet. Lora",
      linkButton: <Button>Lorem</Button>,
      media: <img src={wineClinkImg} alt="" className="h-full w-full" />,
    },
    {
      image: image2,
      alt: "",
      title: "Lorem, ipsum dolor. 2",
      description: "Lorem ipsum dolor sit amet. Lora 2",
      linkButton: <Button>Lorem2</Button>,
      media: <img src={wineClinkImg} alt="" className="h-full w-full" />,
    },
    {
      image: image3,
      alt: "",
      title: "Lorem, ipsum dolor. 3",
      description: "Lorem ipsum dolor sit amet. Lora 3",
      linkButton: <Button>Lorem3</Button>,
      media: <img src={musician} alt="" className="h-full w-full" />,
    },
  ];

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

export function HeroContainer({ children }: ChildProps) {
  return (
    <section className="relative mt-5 h-1/2 w-full shadow">
      <div className="flex h-full w-full overflow-hidden">{children}</div>
    </section>
  );
}

export function ImageContainer({
  children,
  currentHeroSlide,
}: ChildProps & { currentHeroSlide: number }) {
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
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn(
        "h-full w-full object-cover brightness-75",
        props.className,
      )}
      {...props}
      alt={props.alt}
    />
  );
}

// TODO Make linkButton and media props more specific?
export type HeroContentProps = React.HTMLAttributes<HTMLDivElement> &
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
      className="absolute bottom-0 left-0 flex h-full w-full items-center justify-evenly"
      {...props}
    >
      <div className="flex h-1/2 w-1/5 flex-col items-start justify-center gap-5">
        <h2 className="text-start text-5xl font-extrabold text-eggshell-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          {title}
        </h2>
        {description && (
          <p className="text-start text-lg font-medium text-eggshell-50">
            {description}
          </p>
        )}
        {linkButton && linkButton}
      </div>
      <div className="h-1/2 w-1/5 shadow-lg">{media}</div>
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
        className="group absolute right-0 flex h-full w-1/12 items-center transition-colors duration-500 hover:bg-black/15"
        onClick={next}
        {...props}
      >
        {children}
        <ChevronRightIcon className="transition-translate absolute right-0 mr-5 box-border text-eggshell duration-500 group-hover:scale-125" />
      </button>
      <button
        className="group absolute left-0 flex h-full w-1/12 items-center transition-colors duration-500 hover:bg-black/15"
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
