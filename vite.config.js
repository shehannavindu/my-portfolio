import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub repo එකේ නම "my-portfolio" නෙවෙයි නම් මෙතන වෙනස් කරන්න
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
});
