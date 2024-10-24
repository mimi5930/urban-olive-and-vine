import { Menus, Specials } from "~/components";
import { Button } from "~/components/ui/button";
import { capitalizeFirstLetter } from "~/lib/utils";
import menus from "../mockData/urban-menu.json";
import { mockSpecials } from "~/mockData";
import { useState } from "react";
import { MenuSection } from "~/components/Menu";

export default function Menu() {
  const specials = mockSpecials;
  const [currentMenu, setCurrentMenu] = useState<MenuSection>(menus[0]);
  console.log(currentMenu);

  return (
    <section className="flex size-full flex-col items-center">
      <Specials specials={specials} />
      <section className="flex flex-col items-center justify-center">
        <h2 className="mb-14 mt-28 text-center text-5xl">Our Menus</h2>
        <div className="mb-14 flex justify-center gap-4">
          {menus.map((currentMenu, index) => {
            const { menuTitle: title } = currentMenu;
            return (
              <Button
                size="lg"
                key={index}
                onClick={() => setCurrentMenu(currentMenu)}
              >
                {capitalizeFirstLetter(title)}
              </Button>
            );
          })}
        </div>
        <Menus currentMenu={currentMenu} menus={menus} />
      </section>
    </section>
  );
}
