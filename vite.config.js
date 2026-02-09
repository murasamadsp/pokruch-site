import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
	root: "src",
	base: "/pokruch-site/",
	build: {
		outDir: "dist",
		emptyOutDir: true,
	},
	plugins: [
		/*
		checker({
			biome: {
				command: "biome",
				root: process.cwd(),
			},
		}),
		*/
	],
});
