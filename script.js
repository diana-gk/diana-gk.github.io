
/* =========================================
   PORTFOLIO WEBSITE - SCRIPT.JS
   ========================================= */

// Current year in footer
document.getElementById("year")?.replaceChildren(
    document.createTextNode(new Date().getFullYear())
);

// Mobile navigation
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
});

// Project category filters
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(b => {
            const active = b === button;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", String(active));
        });

        document.querySelectorAll(".project-card").forEach(card => {
            card.hidden =
                selected !== "all" &&
                card.dataset.category !== selected;
        });
    });
});

// Contact form
document.getElementById("contact-form")?.addEventListener(
    "submit",
    event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const subject = `Portfolio inquiry: ${data.get("topic")}`;

        const body =
            `Name: ${data.get("name")}\n` +
            `Email: ${data.get("email")}\n` +
            `Topic: ${data.get("topic")}\n\n` +
            `${data.get("message")}`;

        window.location.href =
            `mailto:dgp9937@nyu.edu?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;
    }
);


/* =========================================
   HOMEPAGE THREE-CARD PROJECT CAROUSEL
   ========================================= */

(() => {
    const card = document.getElementById("heroFlipCard");

    // Only run on homepage
    if (!card) return;

    // Front card
    const image = document.getElementById("heroProjectImage");
    const title = document.getElementById("heroProjectTitle");
    const description = document.getElementById("heroProjectDescription");
    const link = document.getElementById("heroProjectLink");

    // Background cards
    const middleImage = document.getElementById("heroMiddleImage");
    const backImage = document.getElementById("heroBackImage");

    // Controls
    const counter = document.getElementById("heroCounter");
    const prev = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");


    /* =====================================
       PROJECT DATA
       ===================================== */

    const projects = [
        {
            title: "Equipment Rental Platform",
            image: "assets/equipment-rental.svg",
            description:
                "Equipment rental management, scheduling, and reservations.",
            url: "projects.html"
        },
        {
            title: "Retail Inventory System",
            image: "assets/inventory.svg",
            description:
                "Multi-location sneaker inventory, barcode scanning, and stock tracking.",
            url: "projects.html"
        },
        {
            title: "Durak Card Game",
            image: "assets/nyu.png",
            description:
                "Interactive browser-based card game with turn logic and game rules.",
            url: "https://diana-gk.github.io/"
        },
        {
            title: "Shopping Simulator",
            image: "assets/shopping.png",
            description:
                "Interactive shopping simulation with frontend application logic.",
            url: "projects.html"
        },
        {
            title: "NYU RoboSub Vision",
            image: "assets/robosub.svg",
            description:
                "Computer vision for underwater robotics and obstacle detection.",
            url: "projects.html"
        },
        {
            title: "Plant App",
            image: "assets/plant.png",
            description:
                "A web application for plant-related interactions.",
            url: "https://plant-app-six.vercel.app/"
        },
        {
            title: "NYU Web Portals",
            image: "assets/nyu.png",
            description:
                "Web portals and administrative tools supporting university workflows.",
            url: "projects.html"
        },
        {
            title: "Immersive Computing Research",
            image: "assets/research.jpg",
            description:
                "Research involving visual computing and immersive experiences.",
            url: "projects.html"
        },
        {
            title: "ReBin Smart Trash Bin",
            image: "assets/rebin.png",
            description:
                "Smart trash bin prototype using ultrasonic sensing.",
            url: "projects.html"
        }
    ];


    /* =====================================
       CAROUSEL STATE
       ===================================== */

    let current = 0;
    let timer;


    /* =====================================
       UPDATE ALL THREE CARDS
       ===================================== */

    function updateHeroStack() {
        const middleIndex =
            (current + 1) % projects.length;

        const backIndex =
            (current + 2) % projects.length;

        // Middle card = next project
        if (middleImage) {
            middleImage.src = projects[middleIndex].image;
            middleImage.alt = "";
        }

        // Back card = project after next
        if (backImage) {
            backImage.src = projects[backIndex].image;
            backImage.alt = "";
        }
    }


    /* =====================================
       DISPLAY SELECTED PROJECT
       ===================================== */

    function showProject(index) {
        current =
            (index + projects.length) % projects.length;

        const project = projects[current];

        // Reset front card flip
        card.classList.remove("is-flipped");
        card.setAttribute("aria-pressed", "false");

        // Update front card
        image.src = project.image;
        image.alt = project.title;

        title.textContent = project.title;
        description.textContent = project.description;
        link.href = project.url;

        // Update middle and back cards
        updateHeroStack();

        // Update counter
        counter.textContent =
            `${String(current + 1).padStart(2, "0")} / ` +
            `${String(projects.length).padStart(2, "0")}`;
    }


    /* =====================================
       AUTO-ADVANCE TIMER
       ===================================== */

    function resetTimer() {
        clearInterval(timer);

        timer = setInterval(() => {
            // Pause while flipped, hovered,
            // focused, or tab is hidden
            if (
                !card.classList.contains("is-flipped") &&
                !card.matches(":hover") &&
                !card.contains(document.activeElement) &&
                !document.hidden
            ) {
                showProject(current + 1);
            }
        }, 4000);
    }


    /* =====================================
       FLIP FRONT CARD
       ===================================== */

    function flipCard() {
        const flipped =
            card.classList.toggle("is-flipped");

        card.setAttribute(
            "aria-pressed",
            String(flipped)
        );

        resetTimer();
    }

    // Mouse click
    card.addEventListener("click", event => {
        if (event.target.closest("a")) return;

        flipCard();
    });

    // Keyboard support
    card.addEventListener("keydown", event => {
        if (event.target !== card) return;

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            flipCard();
        }
    });


    /* =====================================
       PREVIOUS / NEXT CONTROLS
       ===================================== */

    prev?.addEventListener("click", () => {
        showProject(current - 1);
        resetTimer();
    });

    next?.addEventListener("click", () => {
        showProject(current + 1);
        resetTimer();
    });


    /* =====================================
       HOVER PAUSE
       ===================================== */

    card.addEventListener("mouseenter", () => {
        clearInterval(timer);
    });

    card.addEventListener("mouseleave", () => {
        resetTimer();
    });


    /* =====================================
       INITIALIZE CAROUSEL
       ===================================== */

    showProject(0);
    resetTimer();

})();
