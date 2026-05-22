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

            console.log(data);

            setStats(data.data || data);

        } catch (error) {

            console.error(error);

        }
    };

    if (!stats) {
        return <div>Loading Manager Dashboard...</div>;
    }

    return (
        <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
                    <h2 className="text-lg font-semibold">Total Team</h2>
                    <p className="text-4xl font-bold mt-4">
                        {stats[0]?.value}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                    <h2 className="text-lg font-semibold">Attendance</h2>
                    <p className="text-4xl font-bold mt-4">
                        {stats[1]?.value}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                    <h2 className="text-lg font-semibold">Payroll</h2>
                    <p className="text-4xl font-bold mt-4">
                        {stats[2]?.value}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                    <h2 className="text-lg font-semibold">New Hires</h2>
                    <p className="text-4xl font-bold mt-4">
                        {stats[3]?.value}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ManagerDashboard;