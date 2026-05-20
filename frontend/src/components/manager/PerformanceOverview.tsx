type Props = {
    performance: {
        employeeName: string;
        score: number;
    }[];
};

const PerformanceOverview = ({
                                 performance,
                             }: Props) => {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">
                Performance Overview
            </h2>

            <div className="space-y-4">
                {performance.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span>{item.employeeName}</span>
                            <span>{item.score}%</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className="bg-blue-600 h-3 rounded-full"
                                style={{
                                    width: `${item.score}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceOverview;