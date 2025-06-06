// TODO: Use this component in the root folder
/**
 * Renders an announcement section if not past the announcement's expiration date
 * @param props.expires - The content to be displayed inside the announcement section.
 * @param props.children - The content to be displayed inside the announcement section.
 * @returns A styled section element or null.
 */
export default function Announcement({
  children,
}: React.ComponentPropsWithoutRef<"section">) {
  <section className="flex min-h-8 flex-col items-center bg-feldgrau py-1 text-eggshell-50">
    {children}
  </section>;
}
