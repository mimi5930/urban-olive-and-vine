import { Specials } from "~/components";

export default function menu() {
  const specials = {
    soups: [
      {
        name: "Tomato Basil Bisque",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        isGlutenFree: true,
      },
      {
        name: "Mushroom, Caramelized Onion & Brie",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        isGlutenFree: true,
        isVegan: true,
      },
      {
        name: "Mushroom, Caramelized Onion & Brie",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        isGlutenFree: true,
        isVegan: true,
      },
      {
        name: "Alphabet",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
    ],
    quiche: [
      {
        name: "Quiche One",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        isVegan: true,
      },
    ],
  };

  return (
    <section className="flex size-full flex-col items-center">
      <Specials specials={specials} />
    </section>
  );
}
