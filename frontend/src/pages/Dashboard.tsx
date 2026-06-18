import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {Link, useNavigate } from "react-router-dom";
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
  User,
  FileText,
  TrendingDown,
  Award,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import {
  getDashboardStats,
  getDepartmentOverview,
  getRecentActivities,
} from "@/services/dashboardService";
import Sidebar from "@/components/dashboard/Sidebar";
import NotificationComponent from "@/components/dashboard/NotificationComponent";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, role } = useAuth();
  const navigate = useNavigate();

  const {
    data: stats = [],
    isLoading: statsLoading,
    error: statsError,
  } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
  });

  const {
    data: departments = [],
  } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartmentOverview,
  });

  const {
    data: recentActivities = [],
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getRecentActivities,
  });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleManagerDashboard = () => {
    navigate("/manager");
  };

  const iconMap = {
    employees: Users,
    attendance: Calendar,
    payroll: DollarSign,
    hires: TrendingUp,
    user: User,
    report: FileText,
    clock: Clock,
  };
  if (statsError) {
    return (
        <div className="flex items-center justify-center min-h-screen text-red-500 text-2xl font-bold">
          Failed to load dashboard
        </div>
    );
  }

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

        <Sidebar />


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
            {role === "ADMIN" && (
              <div className="my-4">
                <button
                    onClick={handleManagerDashboard}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Manager Dashboard
                </button>
              </div>
            )}
            <Link
                to="/admin-dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Admin Dashboard
            </Link>
            <p className="text-lg text-gray-600">
              Here's your workforce summary for today
            </p>
          </div>
          <div className="mb-8">
            ...
          </div>

          <NotificationComponent />

          {/* Stats Grid */}
          {
            statsLoading ? (
                <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                      <div
                          key={idx}
                          className="h-40 rounded-2xl bg-gray-200 animate-pulse"
                      />
                  ))}
                </div>
            ) : (
                <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat: any) => {

                    const Icon =
                        iconMap[stat.icon as keyof typeof iconMap] || Users;

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
            )
          }

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
                  {departments.map((dept: any) => (
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
                    {
                      label: "Add Employee",
                      icon: Users,
                      color: "blue",
                      path: "/employees",
                    },
                    {
                      label: "Run Payroll",
                      icon: DollarSign,
                      color: "teal",
                      path: "/payroll",
                    },
                    {
                      label: "Generate Report",
                      icon: FileText,
                      color: "cyan",
                      path: "/reports",
                    },
                    {
                      label: "View Analytics",
                      icon: BarChart3,
                      color: "emerald",
                      path: "/analytics",
                    },
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
                            onClick={() => navigate(action.path)}
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
                  {recentActivities.map((activity: any, idx: number) => {
                    const Icon =
  iconMap[activity.icon as keyof typeof iconMap] || User;
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