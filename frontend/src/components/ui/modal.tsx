import * as React from "react"
import { cn } from "@/lib/utils"

const Modal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center",
      className
    )}
    {...props}
  />
))
Modal.displayName = "Modal"

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full max-w-md rounded-2xl border border-0 bg-white shadow-2xl shadow-blue-200/20 p-8",
      className
    )}
    {...props}
  />
))
ModalContent.displayName = "ModalContent"

export { Modal, ModalContent }
