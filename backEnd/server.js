import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info("SERVER IS RUNNING IN ", PORT);
});
