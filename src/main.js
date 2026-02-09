"use strict";

// Parallax
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero__bg");

if (hero && heroBg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	window.addEventListener("scroll", () => {
		const scrolled = window.scrollY;
		if (scrolled <= hero.offsetHeight) {
			heroBg.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
		}
	});
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const headerNav = document.getElementById("headerNav");

if (menuBtn && headerNav) {
	const closeMenu = () => {
		menuBtn.setAttribute("aria-expanded", "false");
		headerNav.classList.remove("is-open");
	};

	menuBtn.addEventListener("click", () => {
		const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
		menuBtn.setAttribute("aria-expanded", String(!isOpen));
		headerNav.classList.toggle("is-open");
	});

	headerNav.addEventListener("click", (e) => {
		if (e.target.closest(".header__nav-link")) {
			closeMenu();
		}
	});

	document.addEventListener("click", (e) => {
		if (!e.target.closest(".header")) {
			closeMenu();
		}
	});
}

// Scroll reveal
const revealSections = document.querySelectorAll("main > section:not(.hero)");

if (revealSections.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.1 },
	);

	for (const section of revealSections) {
		section.classList.add("reveal");
		observer.observe(section);
	}
}

// Active link highlighting (Scroll Spy)
const navLinks = document.querySelectorAll(".header__nav-link");
const sections = document.querySelectorAll("section[id]");

if (navLinks.length > 0 && sections.length > 0) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					// Remove active class from all links
					for (const link of navLinks) {
						link.classList.remove("active");
					}

					// Add active class to corresponding link
					const id = entry.target.id;
					const activeLink = document.querySelector(`.header__nav-link[href="#${id}"]`);
					if (activeLink) {
						activeLink.classList.add("active");
					}
				}
			}
		},
		{
			// Trigger when the section crosses the middle of the viewport
			// rootMargin top -30% means "ignore the top 30% of the viewport"
			// rootMargin bottom -50% means "ignore the bottom 50% of the viewport"
			// effectively creating a small "active area" slightly above the center
			rootMargin: "-30% 0px -50% 0px",
			threshold: 0,
		},
	);

	for (const section of sections) {
		observer.observe(section);
	}
}
