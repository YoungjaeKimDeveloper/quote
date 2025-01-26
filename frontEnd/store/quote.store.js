import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import toast from "react-hot-toast";
export const useQuoteStore = create((set) => ({
  // State
  quotes: [],
  // State - ErrorMessage
  createQuote_Error_message: "",
  // State - Loading
  creatingQuoteLoading: false,
  // Functions
  createQuote: async (newQuote) => {
    const { author, content, category, image } = newQuote;
    if (!author || !content || !category || !image) {
      set({ createQuote_Error_message: "Please fill up the all forms 🥹" });
      return { success: false, message: "Please fill up the all forms 🥹" };
    }
    // 여기에서 서버로 요청보내기
    try {
      set({ creatingQuoteLoading: true });
      const res = await axiosInstance.post("/createQuote", newQuote);
      // 기존에 있던 Qutoe 업데이트해주기
      if (res.data.success) {
        set((state) => ({ quotes: [...state.quotes, res.data.newQuote] }));
        console.log("토스터가 여기에서 보야야함")
        toast.success("오늘의 명언 추가완료❤️");
        return { success: true, message: "Quote created successfully" };
      } else {
        toast.success(`명언 추가 실패 ${res.data.message || "알수없는 오류"}`);
        return {
          success: false,
          message:
            res.data.message || "Failed to create quote for unknown reasons.",
        };
      }
    } catch (error) {
      console.error("ERROR IN - front-end", error.message);
      set({ createQuote_Error_message: error?.response?.data?.message });
      return;
    } finally {
      set({ creatingQuoteLoading: false });
    }
  },
  getQuote: async () => {
    try {
      const res = await axiosInstance.get("/getQuotes");
      if (res.data.success) {
        set({ quotes: res.data.quotes });
      }
    } catch (error) {}
  },
}));
