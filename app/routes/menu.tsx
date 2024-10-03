import { Link } from "@remix-run/react";
import { Menus, Specials } from "~/components";
import { Button } from "~/components/ui/button";
import { capitalizeFirstLetter } from "~/lib/utils";
import menus from "../mockData/urban-menu.json";

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
      <section className="mt-5">
        <h2 className="my-5 text-center text-5xl">Our Menus</h2>
        <div className="my-2 flex justify-center gap-2">
          {menus.map((currentMenu, index) => {
            const { menuTitle: title } = currentMenu;
            return (
              <Link key={index} to={`/menu#${title}`}>
                <Button>{capitalizeFirstLetter(title)}</Button>
              </Link>
            );
          })}
        </div>
      </section>
      <Menus menus={menus} />
    </section>
  );
}
