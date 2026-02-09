import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
	root: "src",
	base: "/pokruch-site/",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
	plugins: [
		imagemin({
			mozjpeg: { quality: 55, progressive: true },
			pngquant: {
				quality: [0.6, 0.75],
			},
			svgo: {
				plugins: [
					{ name: "removeEmptyAttrs" },
				],
			},
		}),
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
