import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
	root: "src",
	build: {
		outDir: "../docs",
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
