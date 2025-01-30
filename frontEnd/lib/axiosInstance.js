import axios from "axios";
const getBaseURL = () => {
  if (window.location.origin.includes("todayquote4u.com")) {
    return "https://todayquote4u.com/quote";
  }
  return "https://quote-qj53.onrender.com/quote"; // 기본 API URL
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export default axiosInstance;
