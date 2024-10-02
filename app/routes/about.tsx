import { ImageHeadingText } from "~/components";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import urbanImage from "~/img/urban-outside.jpg";

export default function about() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative mt-5 flex h-[50vh] w-full">
        <img
          className="size-full object-cover brightness-50"
          src={urbanImage}
          alt="An outside view of Urban Olive and Vine"
        />
        <ImageHeadingText className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          Our Story
        </ImageHeadingText>
      </div>
      <h1 className="p-5 text-center text-5xl">Nurture Your Senses</h1>
      <Card className="w-4/5">
        {/* <CardHeader>
          <CardTitle>Nurture Your Senses</CardTitle>
        </CardHeader> */}
        <CardContent>
          <p className="p-5">
            More than just a bistro, we created Urban Olive & Vine to be a place
            where you can nurture your senses and creativity through great food,
            fine wine, live music, local art and merchandise, and events like
            painting classes with Audrey Martin. Listen to live music, share
            some small plates with friends, try a local craft beer, or find a
            quiet corner to relax with a good book over a cup of coffee or tea.
            Weather permitting, bring your favorite four-legged pals to our
            cozy, dog-friendly patio and pamper them with a treat from a menu
            made just for them. Owned and operated by longtime Hudson residents
            Carol and Chad, we invite you to indulge your senses. Enjoy!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
