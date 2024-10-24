import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="flex min-h-24 items-center justify-center gap-10 bg-feldgrau-900 p-5 text-white">
      <address className="flex grow justify-center">
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-lg">URBAN OLIVE & VINE</p>
          <Link
            className="hover:underline"
            to="https://maps.app.goo.gl/sdZB1NJcqNT9wXKLA"
          >
            <p>520 SECOND STREET</p>
            <p>HUDSON, WI 54016</p>
          </Link>
          <Link to="tel:7153860400">
            <p>715.386.0400</p>
          </Link>
          <p className="text-white/50">
            Copyright © 2024 Urban Olive & Vine • All Rights Reserved
          </p>
        </div>
      </address>
      <form className="flex grow items-center gap-5">
        <p>STAY INFORMED WITH OUR WEEKLY NEWSLETTER</p>
        <Input type="email" placeholder="Email"></Input>
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </form>
    </footer>
  );
}
