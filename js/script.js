/* Variables */

// Navigation
const nav = document.querySelector('.nav__line');
const navLinks = document.querySelector('.nav__links');

/* Event Handler */
nav.addEventListener('click', function () {
	navLinks.classList.toggle('nav__open');
	nav.classList.toggle('nav__transform');
});

// Fadein
const elements = document.querySelectorAll('.fade');

const showElm = function (e) {
	e.classList.add('fade-in');
	fadeObserver.unobserve(e);
};

const fadeIn = function (entries) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio <= 0) return;
		showElm(entry.target);
	});
};

const fadeObserver = new IntersectionObserver(fadeIn, {
	root: null,
	rootMargin: '0px 0px -60% 0px',
	threshold: 0,
});

elements.forEach((el) => {
	fadeObserver.observe(el);
});
