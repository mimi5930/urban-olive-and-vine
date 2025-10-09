import { createContext, useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Circle } from "./svg";
import {
  espressoPicture,
  musicCalendarPicture,
  retailPicture,
  sliderPictureOne,
  sliderPictureTwo,
} from "~/img";
import { cn } from "~/lib/utils";
import { ImageHeadingText } from "./Text";
import YouTubePlayer from "./YoutubePlayer";
import { Link } from "react-router";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export type Slides = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  linkButton?: React.ReactNode;
  media: React.ReactNode;
}[];

type HeroContextProps = {
  api: ReturnType<typeof useEmblaCarousel>[1];
  slides: Slides;
  current: number;
};

// Hero Component Context
const HeroContext = createContext<HeroContextProps | null>(null);

// Hero Context Hook
function useHero() {
  const context = useContext(HeroContext);

  if (!context) throw new Error("useHero must be used within a <Hero />");

  return context;
}

//* Default export
export default function Hero() {
  // State for playing status of YouTube video
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Current slide for carousel
  const [current, setCurrent] = useState<number>(0);

  // Embla Carousel Api state
  const [api, setApi] = useState<CarouselApi>();

  // Embla Carousel api methods
  useEffect(() => {
    // if api is not registered
    if (!api) {
      return;
    }

    // If youtube video is playing, stop autoplay
    if (isPlaying) {
      api.plugins().autoplay.stop();
    }

    // Update state for current slide
    setCurrent(api.selectedScrollSnap());

    // Set event listener on carousel select
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, isPlaying]);

  // Slides object
  const slides: Slides = [
    {
      image: sliderPictureOne,
      alt: "",
      title: "Learn About Urban Olive and Vine",
      description: "Hear from Chad & Carol, the owners of Urban Olive and Vine",
      media: (
        <YouTubePlayer
          videoId="hECAbASrGLs"
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      ),
    },
    {
      image: sliderPictureTwo,
      alt: "",
      title: "Live music",
      description:
        "We love showcasing Hudson's local talent. Check out our event page for upcoming performances.",
      linkButton: (
        <Link to="/events">
          <Button>Events</Button>
        </Link>
      ),
      media: (
        <img
          src={musicCalendarPicture}
          alt="A poster displaying all music events planned for the Summer"
          className="h-full w-full rounded-xl shadow-lg"
        />
      ),
    },
    {
      image: sliderPictureOne,
      alt: "",
      title: "We are more than a restaurant.",
      description:
        "Besides offering a large retail selection, we also sell art from local artists",
      media: (
        <img
          src={retailPicture}
          alt="A display of local art on the wall of Urban Olive and Vine"
          className="h-full w-full rounded-xl shadow-lg"
        />
      ),
    },
    {
      image: sliderPictureTwo,
      alt: "",
      title: "Full Coffee Bar",
      description: "Enjoy a large selection of coffees and over 60 teas",
      linkButton: (
        <Link to="/menu">
          <Button>Our Menus</Button>
        </Link>
      ),
      media: (
        <img
          src={espressoPicture}
          alt="An espresso machine pouring espresso into two coffee cups"
          className="h-full w-full rounded-xl shadow-lg"
        />
      ),
    },
  ];

  return (
    <HeroContext.Provider value={{ api, slides, current }}>
      <HeroContainer>
        <Carousel
          className="size-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5_000, stopOnMouseEnter: true })]}
          setApi={setApi}
        >
          {/* Slides */}
          <CarouselContent className="ml-0 size-full">
            <CarouselSlides />
          </CarouselContent>

          {/* Previous Button */}
          <CarouselPrevious className="left-4 my-auto translate-y-0 stroke-white/80" />

          {/* Next Button */}
          <CarouselNext className="right-4 my-auto translate-y-0 stroke-white/80" />

          {/* Circles on bottom indicating index */}
          <HeroContentCircles />
        </Carousel>
      </HeroContainer>
    </HeroContext.Provider>
  );
}

export function HeroContainer({
  children,
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section className="relative h-[60rem] w-full md:h-[60vh]">
      {children}
    </section>
  );
}
HeroContainer.displayName = "HeroContainer";

export function CarouselSlides() {
  const { slides } = useHero();

  return slides.map(
    ({ image, alt, title, description, linkButton, media }, index) => {
      return (
        <CarouselItem key={title + index} className="w-full pl-0">
          <div className="relative size-full">
            <img
              src={image}
              alt={alt}
              className="size-full object-cover brightness-[40%]"
            />
            <div className="absolute right-0 top-0 flex size-full items-center justify-center gap-10">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-2 lg:w-1/3 lg:items-start">
                <ImageHeadingText>{title}</ImageHeadingText>
                {description && (
                  <p className="text-center text-lg font-medium text-eggshell-50 lg:text-start">
                    {description}
                  </p>
                )}
                {linkButton && linkButton}
              </div>
              <div className="rounded-xlg mb-10 h-2/5 px-2 lg:mb-0 lg:h-1/2 lg:px-0">
                {media}
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    },
  );
}
CarouselSlides.displayName = "CarouselSlides";

export function HeroContentCircles({
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { api, slides, current } = useHero();

  return (
    <div
      className="absolute bottom-0 flex w-full justify-center gap-1 p-2"
      {...props}
    >
      {slides.map((_, index) => {
        return (
          <button key={index} onClick={() => api?.scrollTo(index)}>
            <Circle
              className={`h-3 w-3 stroke-eggshell-200 ${current >= index ? "fill-eggshell-200" : ""}`}
            ></Circle>
          </button>
        );
      })}
    </div>
  );
}
HeroContentCircles.displayName = "HeroContentCircles";
