import { displayTime, isToday } from "~/lib/timeConversions";
import { cn } from "~/lib/utils";

export type Hours = {
  hours: { [key: string]: { open: string | null; close: string | null } };
};

export default function Hours({ hours }: Hours) {
  return (
    <div className="my-10">
      <h2 className="mb-12 text-center text-5xl lg:mb-6">Hours</h2>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {Object.keys(hours).map((day, index) => {
          const { open, close } = hours[day];
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-2 p-2.5 lg:items-start lg:gap-0",
                isToday(day, null) ? "text-logo-green" : "opacity-80",
              )}
            >
              <p className="text-2xl font-semibold lg:text-xl">
                {day.toUpperCase()}
              </p>
              <p className="text-md">
                {open && close
                  ? `${displayTime(open)} - ${displayTime(close)}`
                  : "CLOSED"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
