import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosInstance = axios.create({
  baseURL: "https://quote-qj53.onrender.com/quote",
  withCredentials: true,
});

export default axiosInstance;
ㅊ