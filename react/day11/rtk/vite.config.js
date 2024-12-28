import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "~components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ], // _dirname = 폴더 절대경로를 가져와서 그중의 "src"를 ~로 대체
  },
});
