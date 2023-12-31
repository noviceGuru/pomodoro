/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from "path"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    test: { globals: true, environment: "jsdom" },
    resolve: {
        alias: {
            "components": path.resolve(__dirname, "src/components"),
            "assets": path.resolve(__dirname, "src/assets"),
            "features": path.resolve(__dirname, "src/features"),
        },
    },
    build: {
        outDir: "./build",
    },
    base: "/pomodoro/",
})
