import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import image from "~/img/urbanolive-logo.png";
import { FacebookIcon, InstagramIcon } from "./svg";

const navigationItems = [
  { title: "Home", link: "/" },
  { title: "Our Story", link: "/about" },
  { title: "Hours & Location", link: "/location" },
];

export default function Navbar() {
  return (
    <header className="mb-5 flex justify-center">
      <div className="mx-10 flex h-24 w-full justify-center border-b-2 border-logo-brown p-5">
        <NavigationMenu className="relative max-w-full items-center justify-evenly">
          <div className="flex-1">
            <NavigationMenuList className="gap-4">
              {navigationItems.map(({ title, link }, index) => {
                return (
                  <NavigationMenuItem key={index}>
                    <Link to={link}>
                      <p>{title}</p>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </div>
          <div className="-mt-2 flex-1 self-start">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <img
                    src={image}
                    alt="Urban Olive and Vine logo"
                    className="rounded-xl bg-eggshell p-5 shadow-md"
                  />
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <div className="flex-1">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <Link to="/menu">
                  <Button>Menus</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/events">
                  <Button variant="outline">Live Music</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <div className="group absolute right-0 top-0 flex h-full items-center gap-2">
            <Link to="/">
              <FacebookIcon className="text-feldgrau transition-opacity duration-300 group-hover:opacity-50 group-hover:hover:opacity-100" />
            </Link>
            <Link to="/">
              <InstagramIcon className="text-feldgrau transition-opacity duration-300 group-hover:opacity-50 group-hover:hover:opacity-100" />
            </Link>
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
}
