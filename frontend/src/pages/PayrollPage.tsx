import { useEffect, useState } from "react";
import { getPayrolls } from "@/services/payrollService";

const PayrollPage = () => {

    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        loadPayrolls();
    }, []);

    const loadPayrolls = async () => {
        try {
            const data = await getPayrolls();
            setPayrolls(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <h1 className="text-2xl font-bold mb-5">
                Payroll
            </h1>

            <table className="w-full border">

                <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>

                {payrolls.map((payroll: any) => (
                    <tr key={payroll.id}>
                        <td>{payroll.employeeName}</td>
                        <td>₹ {payroll.salary}</td>
                        <td>{payroll.status}</td>
                    </tr>
                ))}

                </tbody>

            </table>

        </div>
    );
};

export default PayrollPage;