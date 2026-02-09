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
			mozjpeg: { quality: 65, progressive: true },
			pngquant: {
				quality: [0.65, 0.8],
			},
			svgo: {
				plugins: [
					{ name: "removeViewBox" },
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
