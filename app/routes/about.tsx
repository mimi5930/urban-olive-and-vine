import { ImageHeadingText } from "~/components";
import urbanImage from "~/img/urban-outside.jpg";

export default function about() {
  return (
    <section>
      <div className="relative mt-5 h-[50vh] w-full">
        <img
          className="size-full object-cover"
          src={urbanImage}
          alt="An outside view of Urban Olive and Vine"
        />
        <ImageHeadingText className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          Nurture Your Senses
        </ImageHeadingText>
      </div>
      <h1>About</h1>
    </section>
  );
}
