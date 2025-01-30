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
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self';"
  );
  next();
});

app.use(
  cors({
    origin: [
      "https://todayquote4u.com", // 네임칩 도메인
      "https://www.todayquote4u.com",
    ], // www 서브도메인도 허용],
    credentials: true,
  })
);

const PORT = process.env.PORT | 5005;
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
