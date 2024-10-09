import { Link } from "@remix-run/react";
import { Menus, Specials } from "~/components";
import { Button } from "~/components/ui/button";
import { capitalizeFirstLetter } from "~/lib/utils";
import menus from "../mockData/urban-menu.json";
import { mockSpecials } from "~/mockData";

export default function menu() {
  const specials = mockSpecials;

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
