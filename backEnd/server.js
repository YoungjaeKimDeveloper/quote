import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./lib/connectDB.js";
// 추가됨
import path from "path";

// 라우터
import quoteRoutes from "./routes/quotes.routes.js";
dotenv.config();
const app = express();
// 미들웨어 설정해주기

app.use(express.json({ limit: "6 mb" }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://quote-qj53.onrender.com"],
    credentials: true,
  })
);

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use("/quote", quoteRoutes);
// 집중해서 보기
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontEnd/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.info("SERVER IS RUNNING IN ", PORT);
  connectDB();
});
