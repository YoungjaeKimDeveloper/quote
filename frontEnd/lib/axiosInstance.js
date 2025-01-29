import axios from "axios";
import dotenv from "dotenv";

const axiosInstance = axios.create({
  baseURL: "https://quote-qj53.onrender.com/quote",
  withCredentials: true,
});

export default axiosInstance;
