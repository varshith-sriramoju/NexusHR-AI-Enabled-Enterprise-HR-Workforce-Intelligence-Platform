import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "primary" | "success" | "warning" | "danger"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
      variant === "default" && "bg-gray-100 text-gray-900",
      variant === "primary" && "bg-blue-100 text-blue-900",
      variant === "success" && "bg-green-100 text-green-900",
      variant === "warning" && "bg-yellow-100 text-yellow-900",
      variant === "danger" && "bg-red-100 text-red-900",
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export { Badge }
