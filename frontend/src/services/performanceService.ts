import API from "@/api/api.ts";

export const getPerformanceReviews = async () => {
    const response = await API.get("/api/performance");
    return response.data;
};

export const createPerformanceReview = async (data: any) => {
    const response = await API.post("/api/performance", data);
    return response.data;
};