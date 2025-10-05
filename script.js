
// ======================
// STUDENT 1: HOME SECTION
// ======================
const greetingElement = document.createElement("h3");
greetingElement.id = "greeting";
document.querySelector("#home").prepend(greetingElement);

const hours = new Date().getHours();
if (hours < 12) {
    greetingElement.textContent = "Good Morning! ☀️";
} else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon! 🌤️";
} else {
    greetingElement.textContent = "Good Evening! 🌙";
}

const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ======================
// STUDENT 2: ABOUT SECTION
// ======================

// Select the About section
const aboutSection = document.querySelector("#about");

// Team data for dynamic generation
const teamMembers = [
    {
        name: "Double D",
        role: "Team Lead",
        about: "Daniel leads the team and ensures everyone stays on track.",
        image: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        name: "Timileyin",
        role: "Frontend Developer",
        about: "Timileyin designs and builds engaging web interfaces.",
        image: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
        name: "Emmanuel",
        role: "Backend Developer",
        about: "Emmanuel handles data and server-side logic efficiently.",
        image: "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        name: "Mohammed",
        role: "Full Stack Developer",
        about: "Mohammed bridges frontend and backend development smoothly.",
        image: "https://randomuser.me/api/portraits/men/63.jpg"
    },
    {
        name: "Michael",
        role: "UI Developer",
        about: "Michael ensures pixel-perfect design and accessibility.",
        image: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
        name: "Funke",
        role: "Product Designer",
        about: "Funke crafts beautiful, user-centered product experiences.",
        image: "https://randomuser.me/api/portraits/women/36.jpg"
    },
];

// Create a container for dynamically generated members
const dynamicContainer = document.createElement("div");
dynamicContainer.classList.add("generated-members");

// Dynamically add members using JavaScript
teamMembers.forEach((member) => {
    const section = document.createElement("section");
    section.classList.add("member", "generated");

    section.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p><strong>${member.role}</strong> — ${member.about}</p>`;

    dynamicContainer.appendChild(section);
});

// Append dynamic list *after* existing static content
aboutSection.innerHTML = "<h2>About Our Team</h2>"; 
aboutSection.appendChild(dynamicContainer);


// ======================
// STUDENT 3: PROJECTS SECTION
// ======================
const projectCards = document.querySelectorAll("#projects .card");
projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#e7edff";
    });
    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "white";
    });
});

// ======================
// STUDENT 4: CONTACT SECTION
// ======================
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("⚠️ Please fill out all fields!");
    } else {
        alert(`✅ Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    }
});
// ======================
// STUDENT 5: JOURNAL SECTION
// ======================

// Select all week sections
const weekSections = document.querySelectorAll("#journal .week");

// Loop through each week section
weekSections.forEach((week, index) => {

    week.addEventListener("click", () => {
        // Toggle the 'expanded' class on click
        week.classList.toggle("expanded");

        // Optionally change text in the heading to show open/close state
        const heading = week.querySelector("h3");
        if (week.classList.contains("expanded")) {
            heading.textContent += " (Click to Collapse)";
        } else {
            heading.textContent = heading.textContent.replace(
                " (Click to Collapse)",
                ""
            );
        }
    });

    // Add a hover effect title dynamically
    week.setAttribute("title", "Click to expand/collapse this week");
});
