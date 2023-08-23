import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
    // pages: {
    //     "/contact": {
    //         entry: "/src/contact/index.html",
    //     },
    // },
    root,
    optimizeDeps: {
        include: ["linked-dep"],
    },

    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                contact: resolve(root, "contact", "index.html"),
            },
        },
    },
});
