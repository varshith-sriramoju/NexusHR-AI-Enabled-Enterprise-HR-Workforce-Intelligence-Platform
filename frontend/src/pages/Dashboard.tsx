import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  AlertCircle,
  ChevronRight,
  Bell,
  Settings,
  Menu,
  LogOut,
  Home,
  PieChart,
  User,
  FileText,
  TrendingDown,
  Award,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const stats = [
    {
      label: "Total Employees",
      value: "254",
      change: "+5.2%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      trend: "up",
    },
    {
      label: "Present Today",
      value: "238",
      change: "+2.1%",
      icon: Calendar,
      color: "from-teal-500 to-teal-600",
      trend: "up",
    },
    {
      label: "Pending Payroll",
      value: "$125K",
      change: "+12.5%",
      icon: DollarSign,
      color: "from-cyan-500 to-cyan-600",
      trend: "up",
    },
    {
      label: "New Hires",
      value: "12",
      change: "+8.3%",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      trend: "up",
    },
  ];

  const departments = [
    { name: "Engineering", employees: 45, growth: "+8.2%", avatar: "E" },
    { name: "Sales", employees: 32, growth: "+3.1%", avatar: "S" },
    { name: "Marketing", employees: 18, growth: "+5.6%", avatar: "M" },
    { name: "HR", employees: 8, growth: "+0%", avatar: "H" },
    { name: "Operations", employees: 25, growth: "+2.4%", avatar: "O" },
    { name: "Finance", employees: 12, growth: "+1.8%", avatar: "F" },
  ];

  const recentActivities = [
    {
      user: "Alice Johnson",
      action: "Updated employee record",
      time: "2 hours ago",
      icon: User,
    },
    {
      user: "Bob Smith",
      action: "Approved leave request",
      time: "4 hours ago",
      icon: Clock,
    },
    {
      user: "Carol White",
      action: "Generated monthly report",
      time: "6 hours ago",
      icon: FileText,
    },
  ];

  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Employees" },
    { icon: Calendar, label: "Attendance" },
    { icon: DollarSign, label: "Payroll" },
    { icon: PieChart, label: "Analytics" },
    { icon: FileText, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Decorative Blur Elements */}
      <div className="fixed -top-40 -left-40 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />
      <div className="fixed -bottom-40 -right-40 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200/50 bg-white/50 backdrop-blur-2xl">
        <div className="flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-gray-900 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 text-xl font-bold text-white shadow-lg shadow-blue-200">
                N
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                NexusHR
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
            </button>

            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <Settings className="h-5 w-5" />
            </button>

            <div className="h-10 w-px bg-gray-200/50" />

            <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-2 font-medium text-gray-700 hover:from-blue-100 hover:to-teal-100 transition-all shadow-sm hover:shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-sm font-bold text-white">
                JD
              </div>
              <div className="flex flex-col text-left text-sm">
                <span className="font-semibold">John Doe</span>
                <span className="text-xs text-gray-500">Admin</span>
              </div>
            </button>

            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col bg-zinc-900 border-r border-zinc-800 min-h-screen p-6">

          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                  <button
                      key={item.label}
                      className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                          item.active
                              ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                              : "text-gray-300 hover:bg-zinc-800"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 top-20 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Welcome back! 👋</h2>
            <p className="mt-3 text-lg text-gray-600">
              Here's your workforce summary for today
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="border-0 bg-white shadow-lg shadow-gray-200/20 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          {stat.label}
                        </p>
                        <p className="mt-4 text-4xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <div className="mt-3 flex items-center gap-1">
                          {stat.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <p className="text-sm font-semibold text-emerald-600">
                            {stat.change}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-3 mb-8">
            {/* Department Overview */}
            <Card className="lg:col-span-2 border-0 bg-white shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Department Overview
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Employee distribution across all departments
                    </p>
                  </div>
                  <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-2 font-medium text-blue-600 hover:from-blue-100 hover:to-teal-100 transition-all">
                    View All <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div
                      key={dept.name}
                      className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 p-4 hover:from-blue-100 hover:to-teal-100 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 font-bold text-white shadow-lg group-hover:shadow-xl transition-shadow">
                          {dept.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {dept.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {dept.employees} team members
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-gray-900">
                          {dept.employees}
                        </p>
                        <p className="text-sm font-semibold text-emerald-600">
                          {dept.growth}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-white shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300 h-fit">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Add Employee", icon: Users, color: "blue" },
                    { label: "Run Payroll", icon: DollarSign, color: "teal" },
                    { label: "Generate Report", icon: FileText, color: "cyan" },
                    { label: "View Analytics", icon: BarChart3, color: "emerald" },
                  ].map((action) => {
                    const Icon = action.icon;
                    const colorClass =
                      action.color === "blue"
                        ? "text-blue-600"
                        : action.color === "teal"
                        ? "text-teal-600"
                        : action.color === "cyan"
                        ? "text-cyan-600"
                        : "text-emerald-600";
                    return (
                      <button
                        key={action.label}
                        className="w-full flex items-center gap-3 rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-50 px-4 py-3 font-medium text-gray-700 hover:from-blue-50 hover:to-teal-50 hover:border-blue-200 transition-all duration-200"
                      >
                        <Icon className={`h-5 w-5 ${colorClass}`} />
                        <span className="text-sm">{action.label}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Recent Activities */}
            <Card className="border-0 bg-white shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity, idx) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50/50 p-4 hover:bg-gray-100/50 transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">
                            {activity.user}
                          </p>
                          <p className="text-sm text-gray-600">
                            {activity.action}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card className="border-0 bg-white shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  System Alerts
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      type: "warning",
                      icon: AlertCircle,
                      title: "5 employees absent",
                      desc: "Monitor their status",
                      borderColor: "border-yellow-500",
                      bgColor: "bg-yellow-50",
                      textColor: "text-yellow-600",
                    },
                    {
                      type: "info",
                      icon: Clock,
                      title: "Payroll is 85% complete",
                      desc: "Expected in 2 hours",
                      borderColor: "border-blue-500",
                      bgColor: "bg-blue-50",
                      textColor: "text-blue-600",
                    },
                    {
                      type: "success",
                      icon: Award,
                      title: "Onboarding completed",
                      desc: "New team member ready",
                      borderColor: "border-green-500",
                      bgColor: "bg-green-50",
                      textColor: "text-green-600",
                    },
                  ].map((alert, idx) => {
                    const Icon = alert.icon;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 rounded-lg border-l-4 ${alert.borderColor} ${alert.bgColor} p-4`}
                      >
                        <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${alert.textColor}`} />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {alert.title}
                          </p>
                          <p className="text-sm text-gray-600">{alert.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Stats */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Team Satisfaction",
                value: "92%",
                icon: Award,
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Average Attendance",
                value: "93.7%",
                icon: Calendar,
                gradient: "from-teal-500 to-teal-600",
              },
              {
                title: "Active Projects",
                value: "18",
                icon: BarChart3,
                gradient: "from-cyan-500 to-cyan-600",
              },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={idx}
                  className="border-0 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg shadow-gray-200/20 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;