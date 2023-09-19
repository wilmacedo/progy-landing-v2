import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center rounded-md text-center font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    color: {
      default:
        "bg-primary text-white/95 hover:text-white hover:bg-button-primary-gradient",
      outline: "border border-border bg-white hover:bg-accent",
      ghost:
        "text-secondary bg-transparent lg:hover:bg-accent lg:active:bg-accent",
    },
    size: {
      default: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> &
  ComponentProps<"a"> & {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "lg";
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, asChild, ...rest }, ref) => {
    const Comp = asChild ? "a" : "button";
    return (
      <Comp
        className={twMerge(button({ color: variant, size }), className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
