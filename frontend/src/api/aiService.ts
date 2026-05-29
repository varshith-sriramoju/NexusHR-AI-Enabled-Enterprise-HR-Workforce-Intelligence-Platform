import axios from "axios";

const API_BASE_URL = "http://localhost:8084/api/ai";

export const predictAttritionRisk = async (payload: any) => {

    const response = await axios.post(
        `${API_BASE_URL}/attrition`,
        payload
    );


    return response.data;
};