import { Calendar } from "~/components/ui/calendar";

export default function events() {
  return (
    <section className="mt-32 flex w-full flex-col">
      <h1 className="text-center text-5xl">Events</h1>
      <div className="flex w-full justify-center">
        <Calendar />
      </div>
    </section>
  );
}
