export function displayTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours > 12
    ? `${hours - 12}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}PM`
    : `${hours}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}AM`;
}

function convertMinutesToString(minutes: number) {
  return minutes.toString().padStart(2, "0");
}

export function isToday(
  weekDayString: null | string,
  normalDateString: null | string,
) {
  const now = new Date();
  const currentDay = now.toLocaleString("en-US", { weekday: "long" });
  if (weekDayString)
    return weekDayString.toLowerCase() === currentDay.toLowerCase();
  if (normalDateString)
    return (
      new Date(normalDateString).getMonth() === now.getMonth() &&
      new Date(normalDateString).getDate() === now.getDate() &&
      new Date(normalDateString).getFullYear() === now.getFullYear()
    );
}
