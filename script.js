
// No dependencies. Edit your contact email below if needed.
document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{const selected=button.dataset.filter;document.querySelectorAll('.filter-btn').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('.project-card').forEach(card=>{card.hidden=selected!=='all'&&card.dataset.category!==selected;});}));document.getElementById('contact-form')?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const subject=`Portfolio inquiry: ${data.get('topic')}`;const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`;window.location.href=`mailto:dgp9937@nyu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});

// Homepage project carousel + flip card
(() => {
    const card = document.getElementById("heroFlipCard");

    // Run only on homepage
    if (!card) return;

    const image = document.getElementById("heroProjectImage");
    const title = document.getElementById("heroProjectTitle");
    const description = document.getElementById("heroProjectDescription");
    const link = document.getElementById("heroProjectLink");
    const counter = document.getElementById("heroCounter");

    const prev = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");

    // Project images matched to your assets folder
    const projects = [
        {
            title: "Equipment Rental Platform",
            image: "assets/equipment-rental.svg",
            description: "Equipment rental management, scheduling, and reservations.",
            url: "projects.html"
        },
        {
            title: "Retail Inventory System",
            image: "assets/inventory.svg",
            description: "Multi-location sneaker inventory, barcode scanning, and stock tracking.",
            url: "projects.html"
        },
        {
            title: "Durak Card Game",
            image: "assets/nyu.png",
            description: "Interactive browser-based card game with turn logic and game rules.",
            url: "https://diana-gk.github.io/"
        },
        {
            title: "Shopping Simulator",
            image: "assets/shopping.png",
            description: "Interactive shopping simulation with frontend application logic.",
            url: "projects.html"
        },
        {
            title: "NYU RoboSub Vision",
            image: "assets/robosub.svg",
            description: "Computer vision for underwater robotics and obstacle detection.",
            url: "projects.html"
        },
        {
            title: "Plant App",
            image: "assets/plant.png",
            description: "A web application for plant-related interactions.",
            url: "https://plant-app-six.vercel.app/"
        },
        {
            title: "NYU Web Portals",
            image: "assets/nyu.png",
            description: "Web portals and administrative tools supporting university workflows.",
            url: "projects.html"
        },
        {
            title: "Immersive Computing Research",
            image: "assets/research.jpg",
            description: "Research involving visual computing and immersive experiences.",
            url: "projects.html"
        },
        {
            title: "ReBin Smart Trash Bin",
            image: "assets/rebin.png",
            description: "Smart trash bin prototype using ultrasonic sensing.",
            url: "projects.html"
        }
    ];

    let current = 0;
    let timer;

    function showProject(index) {
        current = (index + projects.length) % projects.length;
        const project = projects[current];

        card.classList.remove("is-flipped");
        card.setAttribute("aria-pressed", "false");

        image.src = project.image;
        image.alt = project.title;
        title.textContent = project.title;
        description.textContent = project.description;
        link.href = project.url;

        counter.textContent =
            `${String(current + 1).padStart(2, "0")} / ` +
            `${String(projects.length).padStart(2, "0")}`;
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            // Don't advance while visitor is viewing the back
            if (!card.classList.contains("is-flipped") &&
                !card.matches(":hover") &&
                !card.contains(document.activeElement) &&
                !document.hidden) {
                showProject(current + 1);
            }
        }, 4000);
    }

    function flipCard() {
        const flipped = card.classList.toggle("is-flipped");
        card.setAttribute("aria-pressed", String(flipped));
        resetTimer();
    }

    card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;
        flipCard();
    });

    card.addEventListener("keydown", (event) => {
        if (event.target !== card) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            flipCard();
        }
    });

    prev.addEventListener("click", () => {
        showProject(current - 1);
        resetTimer();
    });

    next.addEventListener("click", () => {
        showProject(current + 1);
        resetTimer();
    });

    // Pause when the mouse enters; resume when it leaves
    card.addEventListener("mouseenter", () => clearInterval(timer));
    card.addEventListener("mouseleave", resetTimer);

    showProject(0);
    resetTimer();
})();
