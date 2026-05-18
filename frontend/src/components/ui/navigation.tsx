import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  items: NavItem[];
  className?: string;
}

export function Sidebar({ items, className }: SidebarProps) {
  return (
    <nav className={cn("space-y-2 p-6", className)}>
      {items.map((item) => (
        <button
          key={item.label}
          onClick={item.onClick}
          className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
            item.active
              ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-200"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex items-center justify-between px-8 py-4">
        {children}
      </div>
    </header>
  );
}
