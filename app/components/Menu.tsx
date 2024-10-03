import { cn } from "~/lib/utils";

type MenuSection = {
  menuTitle: string;
  menuSelections: {
    title: string;
    notes: string[];
    items: {
      name: string;
      description: string;
      price: string;
      isVegan?: boolean;
      isGlutenFree?: boolean;
      isSpecial?: boolean;
    }[];
  }[];
};

type MenusProps = React.HTMLAttributes<HTMLDivElement> & {
  menus: MenuSection[];
};

export default function Menus({ menus, className, ...props }: MenusProps) {
  return (
    <section className={cn("", className)} {...props}>
      {menus.map((currentMenu, index) => {
        return <div></div>;
      })}
    </section>
  );
}

// export function MenuSection({menu: MenuSection}) {
//   const {menuTitle, } = menu
//   return (
//     <h1>m</h1>
//   )
// }
