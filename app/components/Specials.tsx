import { cn } from "~/lib/utils";
import { GlutenFreeIcon, VeganIcon } from "./svg";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export type SpecialsInfo = {
  name: string;
  description: string;
  isGlutenFree?: boolean;
  isVegan?: boolean;
};

export type Specials = {
  soups: SpecialsInfo[];
  quiche: SpecialsInfo[];
};

export default function SpecialsContainer({
  specials,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  specials: Specials;
}) {
  return (
    <div className={cn("mt-32 flex w-full flex-col", className)} {...props}>
      <h1 className="text-center text-5xl">Today&apos;s Specials</h1>
      <div className="mt-5 flex justify-center gap-5">
        <SpecialsCard cardTitle="Daily Soup" specialsInfo={specials.soups} />
        <SpecialsCard cardTitle="Daily Quiche" specialsInfo={specials.quiche} />
      </div>
    </div>
  );
}

export function SpecialsCard({
  cardTitle,
  specialsInfo,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  cardTitle: string;
  specialsInfo: SpecialsInfo[];
}) {
  return (
    <Card className={cn("w-[40%]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">{cardTitle}:</CardTitle>
      </CardHeader>
      <CardContent>
        {!specialsInfo.length ? (
          <NoSpecialsCardContent />
        ) : (
          <ul>
            {specialsInfo.map((specials, index) => {
              const {
                name,
                description,
                isGlutenFree = false,
                isVegan = false,
              } = specials;
              return (
                <li key={index}>
                  <p className="font-bold">{name}</p>
                  <p className="flex opacity-80">
                    {description}
                    {isGlutenFree && (
                      <span>
                        <GlutenFreeIcon className="ml-2 opacity-80" />
                      </span>
                    )}
                    {isVegan && (
                      <span>
                        <VeganIcon className="ml-2 opacity-80" />
                      </span>
                    )}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function NoSpecialsCardContent() {
  return (
    <p>
      Our specials change frequently throughout the week. For the latest
      specials please call us at 715.386.0400
    </p>
  );
}
