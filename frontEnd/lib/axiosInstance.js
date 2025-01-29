import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5005/quote", // 기본 URL 설정
  withCredentials: true,
});

export default axiosInstance;
