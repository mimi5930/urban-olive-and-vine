import { capitalizeFirstLetter, cn } from "~/lib/utils";
import { DownloadIcon, GlutenFreeIcon, VeganIcon } from "./svg";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSpecial?: boolean;
};

type MenuSelection = {
  title: string;
  notes: string[];
  items: MenuItem[];
};

export type MenuSection = {
  menuTitle: string;
  menuSelections: MenuSelection[];
};

type MenusProps = React.HTMLAttributes<HTMLDivElement> & {
  menus: MenuSection[];
};

export default function Menus({ menus, className, ...props }: MenusProps) {
  return (
    <section
      className={cn("mt-5 flex w-[90%] flex-col gap-5", className)}
      {...props}
    >
      {menus.map((currentMenu, index) => {
        return <MenuSection key={index} menu={currentMenu} />;
      })}
    </section>
  );
}

export function MenuSection({
  menu,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { menu: MenuSection }) {
  const { menuTitle, menuSelections } = menu;
  return (
    <Card id={menuTitle}>
      <CardHeader className={className} {...props}>
        <CardTitle className="flex items-center justify-center gap-2 text-3xl">
          {capitalizeFirstLetter(menuTitle)}
          <span className="group">
            <a href="#">
              <DownloadIcon className="opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </span>
        </CardTitle>
        {menuSelections.map((currentMenuSelection, index) => {
          return (
            <MenuSelection menuSelection={currentMenuSelection} key={index} />
          );
        })}
      </CardHeader>
    </Card>
  );
}
MenuSection.displayName = "MenuSection";

export function MenuSelection({
  menuSelection,
}: React.HTMLAttributes<HTMLDivElement> & {
  menuSelection: MenuSelection;
}) {
  const { title, notes, items } = menuSelection;
  return (
    <CardContent className="mt-5">
      <h2 className="border-b-4 border-double text-xl font-semibold">
        {title}
      </h2>
      <ul className="divide-y">
        {notes.map((currentNote, index) => {
          return (
            <li className="p-3" key={index}>
              <p>{currentNote}</p>
            </li>
          );
        })}
      </ul>
      {items.map((currentItem, index) => {
        return <MenuItem item={currentItem} key={index} />;
      })}
    </CardContent>
  );
}

export function MenuItem({
  item,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  item: MenuItem;
}) {
  const {
    name,
    description,
    price,
    isGlutenFree = false,
    isVegan = false,
    isSpecial = false,
  } = item;
  return (
    <div
      className={cn(
        "my-4",
        isSpecial && "border-4 border-double border-logo-green p-3",
        className,
      )}
      {...props}
    >
      <div className="flex justify-between">
        <h3 className="flex gap-1 text-lg font-semibold">
          {isGlutenFree && (
            <span>
              <GlutenFreeIcon />
            </span>
          )}
          {isVegan && (
            <span>
              <VeganIcon />
            </span>
          )}
          {name}
        </h3>
        <p className="font-semibold">{price}</p>
      </div>
      <p className="italic text-muted-foreground">{description}</p>
    </div>
  );
}
