import api from "@/lib/axios";

export const getDashboardStats = async () => {
    const response = await api.get("/api/dashboard/stats");
    return response.data;
};

export const getDepartmentOverview = async () => {
    const response = await api.get("/api/dashboard/departments");
    return response.data;
};

export const getRecentActivities = async () => {
    const response = await api.get("/api/dashboard/activities");
    return response.data;
};