import { Link, useOutletContext } from "@remix-run/react";
import { EventOutletContextProps } from "./events";
import { mediumDateText } from "~/lib/utils";

export default function EventsIndex() {
  const { date } = useOutletContext<EventOutletContextProps>();
  return (
    <div className="h-[40vh]">
      <h2 className="text-center text-2xl">{date && mediumDateText(date)}</h2>
      <h2 className="text-center text-2xl">No Live Musicians Tonight</h2>
      <p className="text-center">
        Check out our Event Calendar below or{" "}
        <Link to="#" className="underline">
          go to our next event
        </Link>
      </p>
    </div>
  );
}
