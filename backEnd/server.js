import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./lib/connectDB.js";
import helmet from "helmet"; // Helmet 미들웨어 추가
// 추가됨
import path from "path";

// 라우터
import quoteRoutes from "./routes/quotes.routes.js";
dotenv.config();
const app = express();
// 미들웨어 설정해주기
// Helmet 설정
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // 기본적으로 자기 자신('self')에서만 리소스 로드 허용
        scriptSrc: ["'self'"], // 외부 JavaScript 로딩 금지
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https://res.cloudinary.com"], // 데이터 URI 이미지 허용
        connectSrc: ["'self'", "https://api.example.com"], // API 요청 허용
        frameSrc: ["'none'"], // iframe 사용 금지
        objectSrc: ["'none'"], // 플래시 같은 object 태그 사용 금지
      },
    },
  })
);

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
