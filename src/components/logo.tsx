import { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"svg"> {
  theme?: "light" | "dark";
}

export function Logo({ theme = "light", ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.82 124.82"
      {...props}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect
            className={theme === "light" ? "fill-black" : "fill-white"}
            x="2.5"
            y="2.5"
            width="119.82"
            height="119.82"
            rx="100"
          />
          <path
            className={theme !== "light" ? "fill-black" : "fill-white"}
            d="M85.44,61.58l-1.81,4.68L73.1,93H62.41L84.55,42.79a34,34,0,0,1,1.92-3.61,16,16,0,0,1,2.88-3.53,15.09,15.09,0,0,1,4.12-2.76A13,13,0,0,1,99,31.78a15.5,15.5,0,0,1,2.69.22c.84.15,1.66.31,2.43.5L102.82,40l-1.83-.1c-.69,0-1.24-.06-1.68-.06a4.22,4.22,0,0,0-2.54.83,10.36,10.36,0,0,0-2,1.88,21.57,21.57,0,0,0-1.31,1.85c-.34.54-.65,1.1-.95,1.69L89.8,51.34Z"
          />
          <path
            className={theme !== "light" ? "fill-black" : "fill-white"}
            d="M39.38,63.24l1.81-4.68L51.72,31.78H62.41L40.27,82a35,35,0,0,1-1.92,3.61,16.27,16.27,0,0,1-2.88,3.53,15.32,15.32,0,0,1-4.12,2.76A13,13,0,0,1,25.79,93a15.42,15.42,0,0,1-2.69-.22c-.84-.15-1.66-.32-2.44-.5L22,84.77l1.83.11c.69,0,1.24.06,1.67.06a4.25,4.25,0,0,0,2.55-.83,10.36,10.36,0,0,0,2-1.88,21.57,21.57,0,0,0,1.31-1.85c.34-.54.65-1.1,1-1.7L35,73.48Z"
          />
        </g>
      </g>
    </svg>
  );
}
