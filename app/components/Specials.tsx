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
    <div
      className={cn(
        "flex w-full flex-col bg-feldgrau-900 pb-28 pt-32",
        className,
      )}
      {...props}
    >
      <h1 className="text-center text-5xl text-eggshell-50">
        Today&apos;s <span className="text-logo-green">Specials</span>
      </h1>
      <div className="mt-28 flex justify-center gap-8">
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
    <Card className={cn("max-w-lg shadow-xl", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center text-xl">{cardTitle}:</CardTitle>
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
                  <div className="flex">
                    <p className="font-bold capitalize">{name}</p>
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
                  </div>
                  <p className="text-muted-foreground">{description}</p>
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
