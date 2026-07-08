import axios from "axios";

const api = axios.create({
    baseURL: "http://16.112.222.73:8080",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;