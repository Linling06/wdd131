// =============================
// Data: 9 celestial objects
// (Objects + Array)
// =============================
const planets = [
    {
        name: "Mercury",
        image: "images/mercury.png",
        description: "Mercury is the closest planet to the Sun and has extreme temperatures."
    },
    {
        name: "Venus",
        image: "images/venus.jpg",
        description: "Venus has a thick, hot atmosphere and is sometimes called Earth’s twin."
    },
    {
        name: "Earth",
        image: "images/earth.jpg",
        description: "Earth is our home and the only known planet with life."
    },
    {
        name: "Mars",
        image: "images/mars.jpg",
        description: "Mars is a cold, dusty world with giant volcanoes and deep canyons."
    },
    {
        name: "Jupiter",
        image: "images/jupiter.jpg",
        description: "Jupiter is the largest planet in our solar system and has a Great Red Spot."
    },
    {
        name: "Saturn",
        image: "images/saturn.jpg",
        description: "Saturn is famous for its bright rings made of ice and rock."
    },
    {
        name: "Uranus",
        image: "images/uranus.jpg",
        description: "Uranus rotates on its side and has a pale blue-green color."
    },
    {
        name: "Sun",
        image: "images/sun.jpg",
        description: "The Sun is a medium-sized star that gives light and heat to our solar system."
    },
    {
        name: "Moon",
        image: "images/moon.jpg",
        description: "The Moon is Earth’s only natural satellite and affects our tides."
    }
];

// =============================
// Footer year
// =============================
function setCurrentYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
}

// =============================
// Dark / Light mode
// =============================
function setupThemeToggle() {
    const themeBtn = document.querySelector("#theme-btn");
    const logo = document.querySelector(".logo");
    const body = document.body;

    if (themeBtn && logo) {
        // start in dark mode
        themeBtn.textContent = "Light Mode";
        logo.src = "images/logo-dark.png";

        themeBtn.addEventListener("click", function () {
            // conditional branching
            if (body.classList.contains("light-mode")) {
                // switch back to dark mode
                body.classList.remove("light-mode");
                themeBtn.textContent = "Light Mode";
                logo.src = "images/logo-dark.png";
            } else {
                // switch to light mode
                body.classList.add("light-mode");
                themeBtn.textContent = "Dark Mode";
                logo.src = "images/logo-light.png";
            }
        });
    }
}

// =============================
// Mobile menu
// =============================
function setupMenuToggle() {
    const menuBtn = document.querySelector("#menu-btn");
    const nav = document.querySelector("#main-nav");

    if (menuBtn && nav) {
        // open / close menu when clicking button
        menuBtn.addEventListener("click", function () {
            if (nav.classList.contains("open")) {
                nav.classList.remove("open");
            } else {
                nav.classList.add("open");
            }
        });

        // close menu when a nav link is clicked (on mobile)
        nav.addEventListener("click", function (event) {
            if (event.target.classList.contains("nav-link")) {
                nav.classList.remove("open");
            }
        });
    }
}

// =============================
// Gallery: build thumbnails
// =============================
function buildGallery() {
    const gallery = document.querySelector("#gallery");

    if (gallery) {
        // clear first (in case)
        gallery.innerHTML = "";

        // Array method: forEach
        planets.forEach(function (planet) {
            const img = document.createElement("img");
            img.src = planet.image;
            img.alt = planet.name;

            // when we click a thumbnail, open the modal
            img.addEventListener("click", function () {
                openModal(planet);
            });

            gallery.appendChild(img);
        });
    }
}

// =============================
// Modal
// =============================
function openModal(planet) {
    const modal = document.querySelector("#modal");
    const modalImg = document.querySelector("#modal-img");
    const caption = document.querySelector("#modal-caption");

    if (modal && modalImg && caption) {
        modalImg.src = planet.image;
        modalImg.alt = planet.name;
        caption.textContent = planet.name + " – " + planet.description;
        modal.classList.remove("hidden");
    }
}

function closeModal() {
    const modal = document.querySelector("#modal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

function setupModalEvents() {
    const modal = document.querySelector("#modal");
    const closeBtn = document.querySelector("#close-btn");

    if (modal && closeBtn) {
        // 1. Click the X button
        closeBtn.addEventListener("click", function () {
            closeModal();
        });

        // 2. Click outside the image (on the dark background)
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // 3. Press Esc key to close
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }
}

// =============================
// Init: run everything after DOM is ready
// =============================
function init() {
    setCurrentYear();      // function 1
    setupThemeToggle();    // function 2
    setupMenuToggle();     // function 3
    buildGallery();        // function 4
    setupModalEvents();    // function 5
}

document.addEventListener("DOMContentLoaded", init);
