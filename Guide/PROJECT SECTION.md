# 👩🏽‍💻 FOXTROT Project — Student Section Guide

This document contains **step-by-step instructions** for each student on how to correctly build their section of the FOXTROT Team Project.  
Each section includes guidance for **HTML**, **CSS**, and **JavaScript** in that order.

---

## 🧩 STUDENT 3 — PROJECTS SECTION

### 🧱 HTML Instructions

- Work inside `<main id="projects">`.
- Add `<section class="projects">` containing several `<article class="card">` elements.
- Each card should include:
  ```html
  <h3>Project Title</h3>
  <p>Short description of what the project does.</p>
  ```

### 🎨 CSS Notes (`projects.css`)

- Display projects in a flexible grid using Flexbox.
- `.card` should have:
  - Background: `#f4f7ff`
  - Border-radius: `8px`
  - Padding: `1rem`
  - Subtle shadow for elevation
- Add a hover transform effect:
  ```css
  .card:hover {
    transform: scale(1.03);
  }
  ```

### ⚙️ JavaScript Notes (`script.js`)

- Add hover interactivity dynamically with JS (changing background color).
- Example logic:
  ```js
  const projectCards = document.querySelectorAll("#projects .card");
  projectCards.forEach((card) => {
    card.addEventListener(
      "mouseenter",
      () => (card.style.backgroundColor = "#e7edff")
    );
    card.addEventListener(
      "mouseleave",
      () => (card.style.backgroundColor = "white")
    );
  });
  ```
- Ensure it works smoothly across all cards.

---

## 🧾 Final Notes for All Students

- Work **only** in your section.
- Follow the file naming convention and keep code consistent.
- Test regularly in your browser.
- Use meaningful commit messages:
  ```bash
  git commit -m "Added JavaScript interactivity for Projects section"
  ```
- Before submitting your Pull Request, verify:
  - HTML is valid and well indented.
  - CSS follows consistent spacing and colors.
  - JavaScript has no console errors.

---

🎉 Great work! Once all sections are complete, your team will have built a fully interactive, collaborative website — just like a real-world development team!
