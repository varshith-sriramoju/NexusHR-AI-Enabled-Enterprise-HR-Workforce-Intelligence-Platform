type Employee = {
    id: number;
    name: string;
    department: string;
    role: string;
};

type Props = {
    employees: Employee[];
};

const TeamTable = ({ employees }: Props) => {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold mb-4">
                Team Members
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Department</th>
                        <th className="p-3 text-left">Role</th>
                    </tr>
                    </thead>

                    <tbody>
                    {employees.map((employee) => (
                        <tr
                            key={employee.id}
                            className="border-b"
                        >
                            <td className="p-3">{employee.id}</td>
                            <td className="p-3">{employee.name}</td>
                            <td className="p-3">
                                {employee.department}
                            </td>
                            <td className="p-3">{employee.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamTable;