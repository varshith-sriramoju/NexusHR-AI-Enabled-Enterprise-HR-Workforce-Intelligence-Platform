import api from "@/api/axios.ts";

export const getPayrolls = async () => {
    const response = await api.get("/api/payroll");
    return response.data;
};

export const getEmployeePayroll = async (id: number) => {
    const response = await api.get(`/api/payroll/${id}`);
    return response.data;
};