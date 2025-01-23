import express from "express";

const router = express.Router();
import {
  createQuote,
  updateQuote,
  deleteQuote,
  getQuotes,
  getSingleQuote,
  getQuoteByCategory,
  getQuoteByAuthor,
} from "../controllers/quote.controller.js";
export default router;

// Quote 만들어주기
router.post("/createQuote", createQuote);
// Quote 업데이트해주기
router.put("/updateQuote/:quoteID", updateQuote);
// // Quote 지워주기
router.delete("/updateQuote/:quoteID", deleteQuote);
// // 전체 quote 갖다주기
router.get("/", getQuotes);
// 개별로 갖다주기
router.get("/:id", getSingleQuote);
// // 카테고리 별로 Quote 갖다주기
router.get("/getQuote/:category", getQuoteByCategory);
// 작자 별로 갖다주기
router.get("/getQuote/:author", getQuoteByAuthor);
