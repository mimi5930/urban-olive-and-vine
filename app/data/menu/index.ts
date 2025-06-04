import { type MenuSection } from "~/components/Menu";
import { summerSpecialsMenu } from "./summerSpecials";
import { breakfastMenuData } from "./breakfastMenu";
import { mainMenuData } from "./mainMenu";
import { urbanSpecials } from "./specials";

export const menuData: MenuSection[] = [
  summerSpecialsMenu,
  breakfastMenuData,
  mainMenuData,
];

export { urbanSpecials };
