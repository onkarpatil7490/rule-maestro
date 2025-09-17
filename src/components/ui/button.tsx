import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow transform hover:scale-105",
        destructive: "bg-error text-foreground hover:bg-error-glow hover:shadow-[0_0_20px_hsl(var(--error)/0.5)]",
        outline: "border border-border bg-transparent hover:bg-card-secondary hover:border-border-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
        ghost: "hover:bg-card-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        success: "bg-success text-foreground hover:bg-success-glow hover:shadow-[0_0_20px_hsl(var(--success)/0.5)]",
        warning: "bg-warning text-background hover:bg-warning-glow hover:shadow-[0_0_20px_hsl(var(--warning)/0.5)]",
        info: "bg-info text-foreground hover:bg-info-glow hover:shadow-[0_0_20px_hsl(var(--info)/0.5)]",
        accent: "bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]",
        glow: "bg-gradient-primary text-foreground hover:shadow-glow transform hover:scale-105 border border-primary/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
