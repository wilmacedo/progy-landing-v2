import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 inline-flex items-center justify-center rounded-md text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    color: {
      default:
        "bg-primary text-white/95 hover:text-white hover:bg-button-primary-gradient",
      outline: "border border-border bg-white hover:bg-accent",
      ghost:
        "text-secondary bg-transparent lg:hover:bg-accent lg:active:bg-accent",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type ButtonProps = ComponentProps<"button"> &
  ComponentProps<"a"> & {
    variant?: "default" | "outline" | "ghost";
    asChild?: boolean;
  };

export function Button({
  variant,
  children,
  className,
  asChild,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp className={twMerge(button({ color: variant }), className)} {...rest}>
      {children}
    </Comp>
  );
}
