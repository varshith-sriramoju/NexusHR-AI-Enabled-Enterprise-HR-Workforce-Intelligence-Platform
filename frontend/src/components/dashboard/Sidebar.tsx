import {
    Home,
    Users,
    Calendar,
    DollarSign,
    PieChart,
    FileText,
    Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    const navigationItems = [
        {
            icon: Home,
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            icon: Users,
            label: "Employees",
            path: "/employees",
        },
        {
            icon: Calendar,
            label: "Attendance",
            path: "/attendance",
        },
        {
            icon: DollarSign,
            label: "Payroll",
            path: "/payroll",
        },
        {
            icon: PieChart,
            label: "Performance",
            path: "/performance",
        },
        {
            icon: FileText,
            label: "Reports",
            path: "/reports",
        },
        {
            icon: Settings,
            label: "Manager",
            path: "/manager-dashboard",
        },
    ];

    return (
        <aside className="hidden lg:flex lg:w-64 lg:flex-col bg-zinc-900 border-r border-zinc-800 min-h-screen p-6">

            <h1 className="text-2xl font-bold text-white mb-8">
                NexusHR
            </h1>

            <nav className="space-y-2">

                {navigationItems.map((item) => {

                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-300 hover:bg-zinc-800 transition-all duration-200"
                        >
                            <Icon className="h-5 w-5" />

                            <span>{item.label}</span>

                        </button>
                    );
                })}

            </nav>

        </aside>
    );
};

export default Sidebar;