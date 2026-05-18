import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children?: ReactNode;
  className?: string;
  gradient?: "blue-teal" | "teal-cyan" | "blue-cyan" | "blue-primary";
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function GradientCard({
  children,
  className,
  gradient = "blue-teal",
  icon,
  title,
  description,
}: GradientCardProps) {
  const gradients = {
    "blue-teal": "from-blue-500 to-teal-500",
    "teal-cyan": "from-teal-500 to-cyan-500",
    "blue-cyan": "from-blue-500 to-cyan-500",
    "blue-primary": "from-blue-600 to-teal-600",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl bg-gradient-to-br p-6 text-white overflow-hidden",
        `bg-gradient-to-br ${gradients[gradient]}`,
        className
      )}
    >
      <div className="absolute inset-0 opacity-10 bg-pattern" />
      <div className="relative z-10">
        {icon && <div className="mb-4 text-3xl">{icon}</div>}
        {title && <h3 className="text-lg font-bold">{title}</h3>}
        {description && <p className="mt-1 text-sm opacity-90">{description}</p>}
        {children}
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  icon,
  trend = "neutral",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-6 shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p
              className={cn(
                "mt-2 text-sm font-semibold",
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-teal-600"
              )}
            >
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-2xl text-white">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
