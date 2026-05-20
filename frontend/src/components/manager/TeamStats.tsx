type Props = {
    totalEmployees: number;
    presentToday: number;
    pendingLeaves: number;
    avgPerformance: number;
};

const TeamStats = ({
                       totalEmployees,
                       presentToday,
                       pendingLeaves,
                       avgPerformance,
                   }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow">
                <h3 className="text-sm text-gray-500">Team Members</h3>
                <p className="text-3xl font-bold">{totalEmployees}</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
                <h3 className="text-sm text-gray-500">Present Today</h3>
                <p className="text-3xl font-bold text-green-600">
                    {presentToday}
                </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
                <h3 className="text-sm text-gray-500">Pending Leaves</h3>
                <p className="text-3xl font-bold text-yellow-500">
                    {pendingLeaves}
                </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
                <h3 className="text-sm text-gray-500">Avg Performance</h3>
                <p className="text-3xl font-bold text-blue-600">
                    {avgPerformance}%
                </p>
            </div>
        </div>
    );
};

export default TeamStats;