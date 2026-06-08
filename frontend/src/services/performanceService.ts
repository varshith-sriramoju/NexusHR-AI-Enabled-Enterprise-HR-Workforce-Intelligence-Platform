import api from "@/api/axios.ts";


export const getPerformanceReviews = async () => {
    const response = await api.get("/api/performance");
    return response.data;
};

export const createPerformanceReview = async (data: any) => {
    const response = await api.post("/api/performance", data);
    return response.data;
};