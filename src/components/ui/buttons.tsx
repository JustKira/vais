import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-vais-pri text-white hover:bg-white hover:text-black duration-300",
      outline:
        "bg-transparent border border-vais-pri text-vais-pri hover:bg-vais-pri hover:text-white duration-300",
      white: "bg-white text-black font-light",
    },
    size: {
      default: "h-12 px-5 rounded-md my-4",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-8 w-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          "font-base text-lg",
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
