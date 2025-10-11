import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { createContext, useContext, useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

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

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

type Weekday = (typeof weekdays)[number];

type HoursFormValues = z.infer<typeof hoursSchema>;

type HoursFormContextProps = {
  register: UseFormRegister<HoursFormValues>;
  errors: FieldErrors<HoursFormValues>;
  setValue: UseFormSetValue<HoursFormValues>;
  defaultWeekdayValues: HoursFormValues;
};

// form context
const HoursFormContext = createContext<HoursFormContextProps | null>(null);

const useHoursForm = () => {
  const context = useContext(HoursFormContext);
  if (!context)
    throw new Error("useHoursForm must be used within a <HoursForm />");
  return context;
};

export default function HoursForm() {
  const defaultWeekdayValues = {
    Monday: { open: "08:00", close: "16:00" },
    Tuesday: { open: "", close: "" },
    Wednesday: { open: "", close: "" },
    Thursday: { open: "", close: "" },
    Friday: { open: "", close: "" },
    Saturday: { open: "", close: "" },
    Sunday: { open: null, close: null },
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<HoursFormValues>({
    resolver: zodResolver(hoursSchema),
    defaultValues: defaultWeekdayValues,
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <HoursFormContext.Provider
      value={{ register, errors, setValue, defaultWeekdayValues }}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        {weekdays.map((weekday) => {
          return <DayInput day={weekday} key={weekday} />;
        })}
        <Button type="submit">Submit</Button>
      </form>
    </HoursFormContext.Provider>
  );
}

function DayInput({
  day,
  ...props
}: { day: Weekday } & React.ComponentPropsWithoutRef<"div">) {
  const { register, errors, setValue, defaultWeekdayValues } = useHoursForm();
  const [isClosed, setIsClosed] = useState<boolean>(
    // If default values for open and close are null, set isClosed to true
    !defaultWeekdayValues[day].open && !defaultWeekdayValues[day].close,
  );

  const closedCheckboxSelect = () => {
    setValue(`${day}.open`, null);
    setValue(`${day}.close`, null);
    setIsClosed(!isClosed);
  };

  return (
    <div {...props}>
      <p className="font-bold">{day}</p>
      <div className="flex gap-2">
        {/* Open Time Input */}
        <div>
          <Label htmlFor={`${day}-open`}>Open</Label>
          <Input
            id={`${day}-open`}
            type="time"
            {...register(`${day}.open`)}
            className="bg-feldgrau text-white"
            disabled={isClosed}
          />
          {errors?.[day]?.open && (
            <p className="text-sm text-red-500">{errors?.[day].open.message}</p>
          )}
        </div>

        {/* Close Time Input */}
        <div>
          <Label htmlFor={`${day}-closed`}>Close</Label>
          <Input
            id={`${day}-closed`}
            type="time"
            {...register(`${day}.close`)}
            className="bg-feldgrau text-white"
            disabled={isClosed}
          />
          {errors?.[day]?.close && (
            <p className="text-sm text-red-500">
              {errors?.[day].close.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center gap-2">
          <Label htmlFor={`${day}-null`}>Closed for the day?</Label>
          <Checkbox
            id={`${day}-null`}
            checked={isClosed}
            onCheckedChange={closedCheckboxSelect}
          />
        </div>
      </div>
    </div>
  );
}
