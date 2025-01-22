import express from "express";

const router = express.Router();

export default router;

// Quote 만들어주기
router.post("/createQuote", createQuote);
// Quote 업데이트해주기
// router.put("/updateQuote", updateQuote);
// // Quote 지워주기
// router.delete("/updateQuote", deleteQuote);
// // 전체 quote 갖다주기
// router.get("/", getQuotes);
// // 카테고리 별로 Quote 갖다주기
// router.get("/getQuote/:category", getQuoteByCategory);
// router.get("/getQuote/:author", getQuoteByAuthor);
