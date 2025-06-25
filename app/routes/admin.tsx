import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";

export type DayFormValues = {
  open: string | null;
  closed: string | null;
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
const openCloseSchema = z.object({ open: z.iso.time().optional() });

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(hoursSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("Monday")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName")} placeholder="Luo" />

      <input type="submit" />
    </form>
  );
}
