import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Footer, Navbar } from "./components";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-eggshell">
        <div className="flex min-h-8 flex-wrap justify-center gap-x-3 bg-feldgrau px-2 text-sm text-eggshell-50">
          <p className="text-center font-bold">
            Adjusted Hours for Carol&apos;s Visitation and Celebration of Life
          </p>
          <p>*</p>
          <p>Friday June 20th: CLOSING AT 3PM</p>
          <p>*</p>
          <p>Saturday June 21st: CLOSED</p>
          <p>*</p>
          <p>Monday June 23rd: CLOSED</p>
        </div>
        <Navbar />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
