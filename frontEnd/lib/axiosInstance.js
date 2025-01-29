import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quote-qj53.onrender.com/quote",
  withCredentials: true,
});

export default axiosInstance;
