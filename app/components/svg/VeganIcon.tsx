import React from "react";

export default function VeganIcon({
  ...props
}: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vegetarian"
      role="img"
      height="24px"
      width="24px"
      viewBox="0 0 512 512"
      {...props}
    >
      <circle
        cx="256"
        cy="256"
        r="220"
        fill="black"
        strokeWidth="25"
        stroke="black"
      />
      <path fill="white" d="m140 120h44l72 225 72-225h44l-90 265h-52z" />
    </svg>
  );
}
