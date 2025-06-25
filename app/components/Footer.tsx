import { Link } from "react-router";
import { FacebookIcon, InstagramIcon } from "./svg";

export default function footer() {
  return (
    <footer className="bg-feldgrau-900 px-5 py-24 text-white sm:px-10">
      <div className="m-auto flex max-w-7xl flex-wrap gap-10 lg:gap-28">
        <div className="flex flex-1 lg:justify-center">
          <div className="flex flex-col justify-start gap-2 text-sm italic">
            {/* <img
              className="aspect-square h-44 object-contain"
              src={urbanPic}
              alt="Urban Olive and Vine"
            /> */}
            <p className="text-lg font-bold text-logo-green">
              URBAN OLIVE AND VINE
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/urbanoliveandvine/">
                <FacebookIcon className="transition-all duration-200 hover:stroke-logo-green" />
              </a>
              <a href="https://www.instagram.com/urbanoliveandvine/">
                <InstagramIcon className="transition-all duration-200 hover:stroke-logo-green" />
              </a>
            </div>
            <a
              className="hover:underline"
              href="https://maps.app.goo.gl/sdZB1NJcqNT9wXKLA"
            >
              <p>520 SECOND STREET</p>
              <p>HUDSON, WI 54016</p>
            </a>
            <a className="hover:underline" href="tel:7153860400">
              <p>715.386.0400</p>
            </a>
            <a
              className="tracking-wider hover:underline"
              href="mailto:chadandcarol@urbanoliveandvine.com"
            >
              <p>chadandcarol@urbanoliveandvine.com</p>
            </a>
          </div>
        </div>
        <div className="flex flex-1 lg:justify-center">
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-lg font-bold text-logo-green">NAVIGATION</p>
            <Link className="italic hover:underline" to="/">
              HOME
            </Link>
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
        </div>
        <div className="flex flex-1 lg:justify-center">
          <div>
            <p className="text-lg font-bold text-logo-green">SCHEDULE</p>
            <ol className="flex flex-col gap-2">
              <li>
                <p className="text-md italic">SUN</p>
                <p className="text-xs opacity-60">CLOSED</p>
              </li>
              <li>
                <p className="text-md italic">MON-THU</p>
                <p className="text-xs opacity-60">8am-4pm</p>
              </li>
              <li>
                <p className="text-md italic">FRI-SAT</p>
                <p className="text-xs opacity-60">8am-8pm</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="m-auto my-10 flex max-w-7xl flex-col gap-5 border-t-2 pt-5 md:flex-row md:justify-between md:gap-0">
        <p className="text-sm opacity-60">
          Copyright © {new Date().getFullYear()} Urban Olive & Vine • All
          Rights Reserved
        </p>
        <a
          className="text-sm opacity-60 hover:underline"
          href="https://millerdevelops.com/"
        >
          Website developed by Michael Miller
        </a>
      </div>
    </footer>
  );
}
