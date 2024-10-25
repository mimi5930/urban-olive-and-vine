import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FacebookIcon, InstagramIcon } from "./svg";

export default function Footer() {
  return (
    <footer className="flex min-h-24 justify-center gap-[20%] bg-feldgrau-900 p-5 px-10 text-white">
      <address className="flex justify-center">
        <div className="flex flex-col justify-start gap-2 text-sm">
          <p className="text-lg font-bold not-italic text-logo-green">
            URBAN OLIVE & VINE
          </p>
          <Link
            className="hover:underline"
            to="https://maps.app.goo.gl/sdZB1NJcqNT9wXKLA"
          >
            <p>520 SECOND STREET</p>
            <p>HUDSON, WI 54016</p>
          </Link>
          <Link className="hover:underline" to="tel:7153860400">
            <p>715.386.0400</p>
          </Link>
          <Link
            className="tracking-wider hover:underline"
            to="mailto:chadandcarol@urbanoliveandvine.com"
          >
            <p>chadandcarol@urbanoliveandvine.com</p>
          </Link>
          <p className="text-white/50">
            Copyright © {new Date().getFullYear()} Urban Olive & Vine • All
            Rights Reserved
          </p>
        </div>
      </address>
      <div className="flex flex-col gap-2 text-sm">
        <p className="text-lg font-bold text-logo-green">LINKS</p>
        <Link className="italic hover:underline" to="/about">
          OUR STORY
        </Link>
        <Link className="italic hover:underline" to="/menu">
          MENUS
        </Link>
        <Link className="italic hover:underline" to="/events">
          EVENTS
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        {/* TODO: Add socials links */}
        <p className="text-lg font-bold text-logo-green">FOLLOW US</p>
        <div className="flex gap-4">
          <Link to="/">
            <FacebookIcon className="transition-all duration-300 hover:stroke-logo-green" />
          </Link>
          <Link to="/">
            <InstagramIcon className="transition-all duration-300 hover:stroke-logo-green" />
          </Link>
        </div>
        <form className="flex flex-col gap-2">
          <p className="italic">SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Email"></Input>
            <Button type="submit" variant="outline">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </footer>
  );
}
