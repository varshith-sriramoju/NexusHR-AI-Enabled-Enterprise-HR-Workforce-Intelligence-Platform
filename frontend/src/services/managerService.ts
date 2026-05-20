import api from "@/lib/axios";

export const getTeamMembers = async () => {
    const response = await api.get("/employees");
    return response.data;
};

export const getPendingLeaves = async () => {
    const response = await api.get("/attendance/leaves/pending");
    return response.data;
};

export const getPerformanceData = async () => {
    const response = await api.get("/performance");
    return response.data;
};