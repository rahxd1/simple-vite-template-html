import { defineConfig } from "vite";

export default defineConfig({
    // pages: {
    //     "/about": {
    //         entry: "src/about.html",
    //     },
    //     "/contact": {
    //         entry: "src/contact.html",
    //     },
    // },
    base: "./",
    server: {
        open: "/index.html",
    },
    build: {
        outDir: "../public",
    },
    root: "src",
    // esbuild: {
    //     jsxFactory: "h",
    //     jsxFragment: "Fragment",
    // },
});
