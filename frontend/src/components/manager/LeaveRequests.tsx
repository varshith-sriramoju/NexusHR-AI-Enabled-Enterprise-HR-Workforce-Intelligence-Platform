type Leave = {
    id: number;
    employeeName: string;
    reason: string;
};

type Props = {
    leaves: Leave[];
};

const LeaveRequests = ({ leaves }: Props) => {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">
                Pending Leave Requests
            </h2>

            <div className="space-y-3">
                {leaves.map((leave) => (
                    <div
                        key={leave.id}
                        className="border rounded-lg p-3"
                    >
                        <p className="font-semibold">
                            {leave.employeeName}
                        </p>

                        <p className="text-sm text-gray-500">
                            {leave.reason}
                        </p>

                        <div className="flex gap-2 mt-3">
                            <button className="bg-green-500 text-white px-3 py-1 rounded">
                                Approve
                            </button>

                            <button className="bg-red-500 text-white px-3 py-1 rounded">
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveRequests;