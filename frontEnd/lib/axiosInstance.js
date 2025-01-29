import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://quote-qj53.onrender.com/quote"
      : "http://localhost:5005/quote",
  withCredentials: true,
});

export default axiosInstance;
