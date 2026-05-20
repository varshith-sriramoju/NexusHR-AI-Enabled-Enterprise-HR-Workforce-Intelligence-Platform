import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboardService";

const ManagerDashboard = () => {

    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const data = await getDashboardStats();
            setStats(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!stats) {
        return <div>Loading Manager Dashboard...</div>;
    }

    return (
        <div className="space-y-6">

            <div className="grid grid-cols-4 gap-4">

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2>Total Team</h2>
                    <p>{stats.totalEmployees}</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2>Attendance</h2>
                    <p>{stats.presentToday}</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2>Leaves</h2>
                    <p>{stats.pendingLeaves}</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                    <h2>Payroll</h2>
                    <p>₹ {stats.monthlyPayroll}</p>
                </div>

            </div>

        </div>
    );
};

export default ManagerDashboard;