import { create } from "zustand";
import axiosInstance from "../lib/axiosInstance";
import toast from "react-hot-toast";
export const useQuoteStore = create((set, get) => ({
  // State
  quotes: [],
  // State - ErrorMessage
  createQuote_Error_message: "",
  // State - Loading
  creatingQuoteLoading: false,
  isFetchingQuotes: false,
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
  // 명언 불러오기
  getQuote: async () => {
    try {
      set({ isFetchingQuotes: true });
      const res = await axiosInstance.get("/");
      if (res?.data?.success) {
        set({ quotes: res.data.quotes });
      }

      return { success: true, message: "명언 불러오기 성공" };
    } catch (error) {
      set({ isFetchingQuotes: true });
      console.error(
        "Failed to get the quotes",
        error?.response?.data?.message || "알수없는 오류"
      );
      toast.error(`명언 불러오기 실패 ${error?.response?.data?.message}`);
      return {
        success: false,
        message: `명언 불러오기 실패 ${error?.response?.data?.message}`,
      };
    } finally {
      set({ isFetchingQuotes: false });
    }
  },

  getQuotesByCategory: async (category) => {
    console.log("Functioned Called", category);
    console.log(get().quotes);
    try {
      const res = await axiosInstance.get(`/getQuote/${category}`);
      console.log(res);
      if (res?.data?.success) {
        set({ quotes: [...res?.data?.quotes] });

        return {
          success: true,
          message: "Fetched the category successfully ✅",
        };
      }
    } catch (error) {
      console.error(`ERROR IN [getQuotesByCategory] ${error.message}`);
      toast.error(error?.response?.data?.message || "예상치 못한 에러!");
      return {
        success: false,
        message: "Failed to fetch the Quotes by Category",
      };
    }
  },
}));
