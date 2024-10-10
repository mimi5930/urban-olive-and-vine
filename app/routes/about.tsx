import { ImageHeadingText } from "~/components";
import { Card, CardContent } from "~/components/ui/card";
import urbanImage from "~/img/urban-outside.jpg";

export default function about() {
  return (
    <section className="min-h-screen">
      <div className="relative h-[50vh] w-full">
        <img
          className="absolute size-full object-cover brightness-50"
          src={urbanImage}
          alt="An outside view of Urban Olive and Vine"
        />
        <ImageHeadingText className="absolute top-1/2 w-full -translate-y-1/2 transform text-center">
          Nurture Your Senses
        </ImageHeadingText>
      </div>
      <div className="z-20 mx-10 border-b-2 border-logo-brown pt-5"></div>
      <div className="flex h-[50vh] items-center justify-center">
        <Card className="z-10 w-4/5 shadow-md">
          <CardContent className="p-5 text-lg [&_*]:py-2.5">
            <p>
              <span className="font-semibold">More than just a bistro,</span> we
              created Urban Olive & Vine to be a place where you can nurture
              your senses and creativity through great food, fine wine, live
              music, local art and merchandise, and events like painting classes
              with Audrey Martin. Nestled in the heart of Hudson, Urban Olive &
              Vine is a vibrant and welcoming space where the community comes
              together to celebrate the finer things in life.
            </p>
            <p>
              Step inside and feel the warm and inviting atmosphere that makes
              Urban Olive & Vine a home away from home. Listen to live music as
              you savor small plates with friends, or try a local craft beer
              while you unwind after a long day. Find a quiet corner to relax
              with a good book over a cup of our freshly brewed coffee or tea,
              and let the stresses of the day melt away. Our carefully curated
              menu, filled with delicious and locally sourced ingredients, is
              crafted to delight your taste buds and provide a feast for your
              senses.
            </p>
            <p>
              Our love for art and creativity extends beyond the kitchen. Urban
              Olive & Vine showcases local talent through regular art
              exhibitions and merchandise that reflects the unique spirit of
              Hudson. Join us for special events like painting classes with the
              talented Audrey Martin, and discover the joy of creating something
              beautiful while enjoying a glass of fine wine.
            </p>
            <p>
              Weather permitting, bring your favorite four-legged pals to our
              cozy, dog-friendly patio. Pamper them with a treat from our
              specially designed dog menu, and watch them enjoy the space as
              much as you do. Our patio is the perfect spot to bask in the sun,
              enjoy the fresh air, and share special moments with your furry
              friends.
            </p>
            <p>
              Urban Olive & Vine is proudly owned and operated by longtime
              Hudson residents, Carol and Chad. Their passion for great food,
              exceptional wine, and a sense of community is evident in every
              detail of the bistro. They invite you to indulge your senses,
              experience the vibrant energy of Urban Olive & Vine, and become a
              part of our ever-growing family. Whether you are here for a casual
              meal, a special event, or simply to enjoy the ambiance, you are
              always welcome. Enjoy!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
