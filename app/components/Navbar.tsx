import { Link } from "@remix-run/react";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import image from "~/img/urbanolive-logo.png";
import {
  CompassIcon,
  FacebookIcon,
  ForkAndKnifeIcon,
  HamburgerIcon,
  HomeIcon,
  InfoIcon,
  InstagramIcon,
  MusicIcon,
} from "./svg";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { VariantProps } from "class-variance-authority";
import React, { useState } from "react";

type NavigationItem = {
  title: string;
  link: string;
  icon?: JSX.Element;
  iconStyle?: React.ComponentPropsWithoutRef<"svg">["className"];
  buttonProps?: VariantProps<typeof buttonVariants>;
};

const navigationItems: NavigationItem[] = [
  { title: "Home", link: "/", icon: <HomeIcon /> },
  { title: "Our Story", link: "/about", icon: <InfoIcon /> },
  { title: "Hours & Location", link: "/#location", icon: <CompassIcon /> },
];

const navigationButtons: NavigationItem[] = [
  { title: "Menus", link: "/menu", icon: <ForkAndKnifeIcon /> },
  {
    title: "Live Music",
    link: "/events",
    buttonProps: { variant: "outline" },
    icon: <MusicIcon />,
  },
];

const socialIconClassNames: React.ComponentPropsWithoutRef<"svg">["className"] =
  "text-feldgrau transition-opacity duration-300 group-hover:opacity-50 group-hover:hover:opacity-100";

const socials: NavigationItem[] = [
  {
    title: "Facebook",
    link: "/",
    icon: <FacebookIcon />,
  },
  {
    title: "Instagram",
    link: "/",
    icon: <InstagramIcon />,
  },
];

export default function navbar() {
  const allNavigation: NavigationItem[] =
    navigationItems.concat(navigationButtons);
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  return (
    <header className="mb-5 flex justify-center">
      <div className="mx-10 flex h-24 w-full justify-center border-b-2 border-logo-brown p-5">
        <NavigationMenu className="relative max-w-full items-center justify-between">
          <div className="hidden flex-1 lg:block">
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
          <div className="hidden flex-1 lg:block">
            <NavigationMenuList className="gap-4">
              {navigationButtons.map(({ link, buttonProps, title }, index) => {
                return (
                  <NavigationMenuItem key={index}>
                    <Link to={link}>
                      <Button
                        variant={buttonProps?.variant && buttonProps.variant}
                        size={buttonProps?.size && buttonProps.size}
                      >
                        {title}
                      </Button>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </div>
          <div className="lg:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger onClick={() => setSheetOpen(!sheetOpen)}>
                <HamburgerIcon />
              </SheetTrigger>
              <SheetContent className="flex items-center justify-center bg-eggshell-50">
                <NavigationMenuList className="flex flex-col gap-14 space-x-0">
                  {allNavigation.map(({ link, title, icon }, index) => {
                    return (
                      <NavigationMenuItem key={index}>
                        <Link
                          className="flex items-center gap-2 text-3xl"
                          to={link}
                          onClick={() => setSheetOpen(!sheetOpen)}
                        >
                          {icon}
                          <p className="flex">{title}</p>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                  <div className="mt-10 flex gap-12 text-3xl">
                    {socials.map(({ link, icon }, index) => {
                      return (
                        <NavigationMenuItem key={index}>
                          <Link to={link}>{icon}</Link>
                        </NavigationMenuItem>
                      );
                    })}
                  </div>
                </NavigationMenuList>
              </SheetContent>
            </Sheet>
          </div>
          <div className="group absolute right-0 top-0 hidden h-full items-center gap-2 lg:flex">
            {socials.map(({ link, title, icon }, index) => {
              return (
                <Link to={link} key={index}>
                  <span className="sr-only">{title}</span>
                  {icon
                    ? React.cloneElement(icon, {
                        className: socialIconClassNames,
                      })
                    : title}
                </Link>
              );
            })}
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
}
