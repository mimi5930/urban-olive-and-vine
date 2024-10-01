import { cn } from "~/lib/utils";

type ImageHeadingTextProps = React.HTMLAttributes<HTMLHeadingElement>;

export function ImageHeadingText({
  className,
  children,
  ...props
}: ImageHeadingTextProps) {
  return (
    <h2
      className={cn(
        "text-start text-5xl font-extrabold text-eggshell-200 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}