export function displayTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours > 12
    ? `${hours - 12}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}PM`
    : `${hours}${minutes !== 0 ? ":" + convertMinutesToString(minutes) : ""}AM`;
}

export function displayMonth(month: number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
}

/**
 *
 * @param currentMonth The current month
 * @param value - Value to change current month by
 * @example 1 will add a month -1 will go to previous month
 */
export function changeMonth(currentMonth: Date, value: number) {
  const newMonth = currentMonth;
  newMonth.setDate(1);
  newMonth.setHours(0, 0, 0, 0);
  newMonth.setMonth(currentMonth.getMonth() + value);
  return newMonth;
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
