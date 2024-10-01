import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="flex h-24 items-center justify-center gap-10 bg-feldgrau-900 p-5 text-white">
      <div className="flex grow justify-center">
        <div className="flex flex-col">
          <p>
            URBAN OLIVE & VINE • 520 SECOND STREET • HUDSON, WI 54016 •
            715.386.0400
          </p>
          <p className="text-white/50">
            Copyright © 2024 Urban Olive & Vine • All Rights Reserved
          </p>
        </div>
      </div>
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
