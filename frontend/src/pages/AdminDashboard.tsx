import { useEffect, useState } from "react";
import axios from "axios";

interface DashboardStats {
    totalEmployees: number;
    activeEmployees: number;
    departments: number;
    attendanceToday: number;
}

interface DepartmentStats {
    department: string;
    employees: number;
}

const AdminDashboard = () => {
    const [stats, setStats] = useState<DashboardStats>({
        totalEmployees: 0,
        activeEmployees: 0,
        departments: 0,
        attendanceToday: 0,
    });

    const [departments, setDepartments] = useState<DepartmentStats[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            axios.get("http://localhost:8080/api/dashboard/stats"),
            axios.get("http://localhost:8080/api/dashboard/departments"),
        ])
            .then(([statsRes, deptRes]) => {
                setStats(statsRes.data);
                setDepartments(deptRes.data);
            })
            .catch((error) => {
                console.error("Dashboard Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen text-xl">
                Loading Dashboard...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">
                Admin Workforce Analytics Dashboard
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500">Total Employees</h2>
                    <p className="text-3xl font-bold">{stats.totalEmployees}</p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500">Active Employees</h2>
                    <p className="text-3xl font-bold">{stats.activeEmployees}</p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500">Departments</h2>
                    <p className="text-3xl font-bold">{stats.departments}</p>
                </div>

                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-gray-500">Today's Attendance</h2>
                    <p className="text-3xl font-bold">{stats.attendanceToday}</p>
                </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Department Analytics */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-xl font-semibold mb-4">
                        Department Analytics
                    </h2>

                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="border-b">
                            <th className="text-left py-2">Department</th>
                            <th className="text-left py-2">Employees</th>
                        </tr>
                        </thead>

                        <tbody>
                        {departments.map((dept, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">{dept.department}</td>
                                <td className="py-2">{dept.employees}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* AI Insights */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h2 className="text-xl font-semibold mb-4">
                        AI Workforce Insights
                    </h2>

                    <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Employee Engagement</p>
                            <p className="text-2xl font-bold text-green-600">85%</p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Attrition Risk</p>
                            <p className="text-2xl font-bold text-red-500">Low</p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Overall Workforce Health</p>
                            <p className="text-2xl font-bold text-blue-600">Good</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;