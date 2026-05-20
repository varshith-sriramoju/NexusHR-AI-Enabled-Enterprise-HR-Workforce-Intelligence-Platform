import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboardService";

const EmployeeDashboard = () => {

    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const data = await getDashboardStats();
            setStats(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!stats) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-4 gap-4">

            <div className="p-5 bg-white rounded-xl shadow">
                <h2>Total Employees</h2>
                <p>{stats.totalEmployees}</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow">
                <h2>Present Today</h2>
                <p>{stats.presentToday}</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow">
                <h2>Pending Leaves</h2>
                <p>{stats.pendingLeaves}</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow">
                <h2>Monthly Payroll</h2>
                <p>₹ {stats.monthlyPayroll}</p>
            </div>

        </div>
    );
};

export default EmployeeDashboard;