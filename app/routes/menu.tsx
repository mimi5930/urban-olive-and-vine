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

  const menus = [
    {
      menuTitle: "main",
      menuSections: [
        {
          title: "Salads, Soups, and Quiche",
          notes: [
            "Add warm rotisserie chicken to any salad $3.00",
            "Add cold smoked salmon to any salad $5.00",
          ],
          items: [
            {
              name: "Caesar Salad",
              description:
                "Carrot, cucumber, red onion, and tomato on top of a bed of spring greens with your choice of dressing",
              price: "12.99",
              isVegan: true,
            },
            {
              name: "Soup Sampler",
              description: "Can't decide which soup to get? Try three!",
              price: "10.00",
              isSpecial: true,
            },
          ],
        },
      ],
    },
  ];

  return (
    <section className="flex size-full flex-col items-center">
      <Specials specials={specials} />
      <section className="mt-5">
        <h2>Our Menu</h2>
      </section>
    </section>
  );
}
