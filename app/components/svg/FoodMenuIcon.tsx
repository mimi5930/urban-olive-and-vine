export default function FoodMenu({
  ...props
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      strokeWidth="2px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path className="stroke-black" d="M10,9h4m-4,4h4" />
      <path
        className="fill-none stroke-black"
        d="M17,21H6V5H17a1,1,0,0,1,1,1V20A1,1,0,0,1,17,21ZM16,5V4.12A1,1,0,0,0,14.8,3L6,5Z"
      />
    </svg>
  );
}
