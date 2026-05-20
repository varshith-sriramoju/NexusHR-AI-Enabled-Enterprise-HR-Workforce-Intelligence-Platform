import API from "@/api/api.ts";

export const getPayrolls = async () => {
    const response = await API.get("/api/payroll");
    return response.data;
};

export const getEmployeePayroll = async (id: number) => {
    const response = await API.get(`/api/payroll/${id}`);
    return response.data;
};