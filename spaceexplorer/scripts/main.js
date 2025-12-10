// =============================
// Data: 9 celestial objects
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
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// =============================
// Dark / Light mode
// =============================
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.querySelector("#theme-btn");
    const logo = document.querySelector(".logo");

    body.classList.toggle("light-mode");

    // Change button text
    if (body.classList.contains("light-mode")) {
        themeBtn.textContent = "Dark Mode";
        // switch to light logo
        if (logo) {
            logo.src = logo.dataset.logoLight;
        }
    } else {
        themeBtn.textContent = "Light Mode";
        // switch to dark logo
        if (logo) {
            logo.src = logo.dataset.logoDark;
        }
    }
}

function setupThemeToggle() {
    const themeBtn = document.querySelector("#theme-btn");
    if (!themeBtn) return;

    // Default text on first load
    themeBtn.textContent = "Light Mode";

    themeBtn.addEventListener("click", toggleTheme);
}

// =============================
// Mobile menu
// =============================
function toggleMenu() {
    const nav = document.querySelector("#main-nav");
    if (!nav) return;

    nav.classList.toggle("open");
}

function setupMenuToggle() {
    const menuBtn = document.querySelector("#menu-btn");
    const nav = document.querySelector("#main-nav");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", toggleMenu);

    // Optional: close menu if user clicks a nav link (mobile)
    nav.addEventListener("click", function (event) {
        if (event.target.classList.contains("nav-link")) {
            nav.classList.remove("open");
        }
    });
}

// =============================
// Gallery: build thumbnails
// =============================
function buildGallery() {
    const gallery = document.querySelector("#gallery");
    if (!gallery) return;

    // Clear in case this runs twice
    gallery.innerHTML = "";

    // Array method: forEach
    planets.forEach(function (planet) {
        const img = document.createElement("img");
        img.src = planet.image;
        img.alt = planet.name;
        img.setAttribute("data-name", planet.name); // helpful for debugging

        img.addEventListener("click", function () {
            openModal(planet);
        });

        gallery.appendChild(img);
    });
}

// =============================
// Modal
// =============================
function openModal(planet) {
    const modal = document.querySelector("#modal");
    const modalImg = document.querySelector("#modal-img");
    const caption = document.querySelector("#modal-caption");

    if (!modal || !modalImg || !caption) return;

    modalImg.src = planet.image;
    modalImg.alt = planet.name;
    caption.textContent = planet.name + " – " + planet.description;

    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.querySelector("#modal");
    if (!modal) return;
    modal.classList.add("hidden");
}

function setupModalEvents() {
    const modal = document.querySelector("#modal");
    const closeBtn = document.querySelector("#close-btn");

    if (!modal || !closeBtn) return;

    // Close when clicking X
    closeBtn.addEventListener("click", closeModal);

    // Close when clicking outside the image
    modal.addEventListener("click", function (event) {
        // Conditional: only close if they clicked the dark background,
        // not the image or caption.
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close with Esc key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
}

// =============================
// Init: run everything after DOM is ready
// =============================
function init() {
    setCurrentYear();
    setupThemeToggle();
    setupMenuToggle();
    buildGallery();
    setupModalEvents();
}

document.addEventListener("DOMContentLoaded", init);
