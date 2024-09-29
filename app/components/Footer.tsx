import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex h-24 items-center justify-center gap-10 bg-feldgrau-900 text-white">
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
      <div className="flex grow items-center gap-5">
        <p>STAY INFORMED WITH OUR WEEKLY NEWSLETTER</p>
        <input type="email" />
        <Button variant="outline">Subscribe</Button>
      </div>
    </footer>
  );
}
