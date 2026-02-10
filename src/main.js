"use strict";

// Parallax
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero__bg");

if (hero && heroBg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	window.addEventListener(
		"scroll",
		() => {
			const scrolled = window.scrollY;
			if (scrolled <= hero.offsetHeight) {
				heroBg.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
			}
		},
		{ passive: true },
	);
}
