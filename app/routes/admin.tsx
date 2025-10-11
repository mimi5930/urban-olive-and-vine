import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import HoursForm from "~/components/Forms/HoursForm";

export type DayFormValues = {
  open: string | null;
  close: string | null;
};

export type HoursFormValues = {
  Sunday: DayFormValues;
  Monday: DayFormValues;
  Tuesday: DayFormValues;
  Wednesday: DayFormValues;
  Thursday: DayFormValues;
  Friday: DayFormValues;
  Saturday: DayFormValues;
};

const openCloseSchema = z.object({
  open: z.string().nullable(),
  close: z.string().nullable(),
});

const hoursSchema = z.object({
  Sunday: openCloseSchema,
  Monday: openCloseSchema,
  Tuesday: openCloseSchema,
  Wednesday: openCloseSchema,
  Thursday: openCloseSchema,
  Friday: openCloseSchema,
  Saturday: openCloseSchema,
});

export default function Admin() {
  return <HoursForm />;
}
