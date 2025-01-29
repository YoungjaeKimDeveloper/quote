import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    // ✅ Vite에서 `process.env` 관련 오류 방지
  },
});
