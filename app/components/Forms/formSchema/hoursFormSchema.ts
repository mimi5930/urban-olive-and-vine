import { z } from "zod";

export const openCloseSchema = z.object({
  open: z.string().nullable(),
  close: z.string().nullable(),
});

export const hoursSchema = z.object({
  Sunday: openCloseSchema,
  Monday: openCloseSchema,
  Tuesday: openCloseSchema,
  Wednesday: openCloseSchema,
  Thursday: openCloseSchema,
  Friday: openCloseSchema,
  Saturday: openCloseSchema,
});

export const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type Weekday = (typeof weekdays)[number];

export type HoursFormValues = z.infer<typeof hoursSchema>;
