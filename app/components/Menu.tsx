import { cn } from "~/lib/utils";
import { DownloadIcon, GlutenFreeIcon, VeganIcon } from "./svg";

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
  currentMenu: MenuSection;
};

export default function Menus({
  currentMenu,
  className,
  ...props
}: MenusProps) {
  return (
    <section className={cn("mb-24 flex flex-col gap-5", className)} {...props}>
      <MenuSection menu={currentMenu} />
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
    <article id={menuTitle} {...props} className={className}>
      <h2 className="mb-6 flex items-center justify-center gap-2 text-4xl capitalize">
        {menuTitle}
        <span className="group">
          <a href="#">
            <DownloadIcon className="size-6 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-x-32 gap-y-4 xl:grid-cols-2">
        {menuSelections.map((currentMenuSelection, index) => {
          return (
            <MenuSelection menuSelection={currentMenuSelection} key={index} />
          );
        })}
      </div>
    </article>
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
    <div className="w-auto px-3 sm:w-[32rem]">
      <h2 className="border-b-8 border-double border-feldgrau text-2xl font-semibold">
        {title}
      </h2>
      <ul className="divide-y text-lg">
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
    </div>
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
        "my-14",
        isSpecial && "rounded-sm bg-feldgrau p-5 shadow-lg",
        className,
      )}
      {...props}
    >
      <div className={cn("flex justify-between", isSpecial && "text-white")}>
        <h3 className="flex items-center gap-1 text-2xl font-semibold">
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
        <p className="text-2xl font-semibold text-logo-green">{price}</p>
      </div>
      <p
        className={cn(
          "text-lg italic text-muted-foreground",
          isSpecial && "text-white",
        )}
      >
        {description}
      </p>
    </div>
  );
}
