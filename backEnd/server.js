import dotenv from "dotenv";
import express from "express";
import connectDB from "./lib/connectDB.js";
// 라우터
import quoteRoutes from "./routes/quotes.routes.js";
const app = express();
// 미들웨어 설정해주기
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;

app.use("/quote", quoteRoutes);

app.listen(PORT, () => {
  console.info("SERVER IS RUNNING IN ", PORT);
  connectDB(connectDB);
});
