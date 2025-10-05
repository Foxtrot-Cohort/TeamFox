# 👩🏽‍💻 FOXTROT Project — Student Section Guide

This document contains **step-by-step instructions** for each student on how to correctly build their section of the FOXTROT Team Project.  
Each section includes guidance for **HTML**, **CSS**, and **JavaScript** in that order.

---

## 🧩 STUDENT 5 — JOURNAL SECTION

### 🧱 HTML Instructions

- Work inside `<main id="journal">`.
- Add multiple `<section class="week">` elements for each week’s progress.
- Each should contain a `<h3>` and a `<ul>` list of each member’s contribution.

### 🎨 CSS Notes (`journal.css`)

- Style `.week` with padding, rounded corners, and light shadow.
- Hide list items initially using:
  ```css
  .week ul {
    display: none;
  }
  ```
- When `.week.expanded` is active, show the list and change background to `#eaf0ff`.
- Use a smooth transition effect for the expand/collapse animation.

### ⚙️ JavaScript Notes (`script.js`)

- Select all `.week` elements.
- Add click listeners to toggle an `expanded` class on each.
- Update the heading text to show “(Click to Collapse)” when expanded.
- Example logic:
  ```js
  const weeks = document.querySelectorAll("#journal .week");
  weeks.forEach((week) => {
    week.addEventListener("click", () => {
      week.classList.toggle("expanded");
    });
  });
  ```
- Optionally, collapse all by default on page load.

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
