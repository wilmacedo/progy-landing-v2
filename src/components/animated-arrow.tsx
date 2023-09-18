import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function AnimatedArrow({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={twMerge(
        "lucide lucide-arrow-right text-white h-3.5 w-3.5",
        className
      )}
      {...rest}
    >
      <path
        d="M5 12h14"
        className="transition-all duration-300 -translate-x-1 scale-x-0 group-hover:scale-x-100 group-hover:translate-x-1"
      />
      <path
        d="m12 5 7 7-7 7"
        className="transition-all duration-300 group-hover:translate-x-1"
      />
    </svg>
  );
}
