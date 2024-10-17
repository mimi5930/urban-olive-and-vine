export function displayTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours > 12
    ? `${hours - 12}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}PM`
    : `${hours}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}AM`;
}

function convertMinutesToString(minutes: number) {
  return minutes.toString().padStart(2, "0");
}

export function isToday(day: string) {
  const now = new Date();
  const currentDay = now.toLocaleString("en-US", { weekday: "long" });
  return day.toLowerCase() === currentDay.toLowerCase();
}
