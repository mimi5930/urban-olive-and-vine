import { cn } from "~/lib/utils";
import { DownloadIcon, GlutenFreeIcon, VeganIcon } from "./svg";

export type MenuItem = {
  name: string;
  description?: string;
  details?: string[];
  price?: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSpecial?: boolean;
};

export type MenuSelection = {
  title: string;
  notes?: string[];
  items: MenuItem[];
};

export type MenuSection = {
  menuTitle: string;
  menuSelections: MenuSelection[];
  menuDocumentLink?: string;
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
  const { menuTitle, menuSelections, menuDocumentLink } = menu;
  return (
    <article id={menuTitle} {...props} className={className}>
      <h2 className="mb-6 flex items-center justify-center gap-2 p-4 text-center text-4xl capitalize">
        {menuTitle}
        <span className="group">
          {menuDocumentLink ? (
            <a href={menuDocumentLink} download>
              <DownloadIcon className="size-6 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ) : null}
        </span>
      </h2>
      <div
        className={
          menuSelections.length === 1
            ? "columns-1 gap-x-32 gap-y-4"
            : "columns-1 gap-x-32 gap-y-4 xl:columns-2"
        }
      >
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
    <div className="w-auto px-5 sm:w-[32rem] sm:px-3 xl:break-inside-avoid">
      <h2 className="border-b-8 border-double border-feldgrau text-2xl font-semibold">
        {title}
      </h2>
      <ul className="divide-y text-lg">
        {notes?.map((currentNote, index) => {
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
    details,
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
      <div
        className={cn(
          "flex flex-col justify-between sm:flex-row",
          isSpecial && "text-white",
        )}
      >
        <h3 className="flex items-start gap-1 text-2xl font-semibold">
          {isGlutenFree && (
            <span className="mt-1">
              <GlutenFreeIcon />
            </span>
          )}
          {isVegan && (
            <span className="mt-1">
              <VeganIcon />
            </span>
          )}
          {name}
        </h3>
        <p className="text-nowrap text-2xl font-semibold text-logo-green">
          {price}
        </p>
      </div>
      {description && (
        <p
          className={cn(
            "text-lg italic text-muted-foreground",
            isSpecial && "text-white",
          )}
        >
          {description}
        </p>
      )}

      {details?.map((currentDetail, index) => {
        return (
          <p
            className="text-base text-muted-foreground"
            key={currentDetail + index}
          >
            &mdash; {currentDetail}
          </p>
        );
      })}
    </div>
  );
}
