import { cn } from "~/lib/utils";
import { GlutenFreeIcon, VeganIcon } from "./svg";

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

type MenuSection = {
  menuTitle: string;
  menuSelections: MenuSelection[];
};

type MenusProps = React.HTMLAttributes<HTMLDivElement> & {
  menus: MenuSection[];
};

export default function Menus({ menus, className, ...props }: MenusProps) {
  return (
    <section className={cn("", className)} {...props}>
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
    <div className={className} {...props}>
      <h1>{menuTitle}</h1>
      {menuSelections.map((currentMenuSelection, index) => {
        return (
          <MenuSelection menuSelection={currentMenuSelection} key={index} />
        );
      })}
    </div>
  );
}

export function MenuSelection({
  menuSelection,
}: React.HTMLAttributes<HTMLDivElement> & {
  menuSelection: MenuSelection;
}) {
  const { title, notes, items } = menuSelection;
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {notes.map((currentNote, index) => {
          return (
            <li key={index}>
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
  const { name, description, price, isGlutenFree, isVegan, isSpecial } = item;
  const special: React.HtmlHTMLAttributes<HTMLDivElement>["className"] =
    // TODO Add border
    isSpecial ? "FANCYBORDER" : "";
  return (
    <div className={cn(special, className)} {...props}>
      <div>
        <h2>
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
        </h2>
        <p>{price}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
