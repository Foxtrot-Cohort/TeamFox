
# 👩🏽‍💻 FOXTROT Project — Student Section Guide

This document contains **step-by-step instructions** for each student on how to correctly build their section of the FOXTROT Team Project.  
Each section includes guidance for **HTML**, **CSS**, and **JavaScript** in that order.

---

## 🧩 STUDENT 1 — HOME SECTION

### 🧱 HTML Instructions
- Work inside the `<main id="home">` section.
- Add:
  - A heading: `<h2>Welcome to Foxtrot</h2>`
  - A paragraph introducing the team.
  - A list (`<ul>`) of all team members with their roles.
  - A button with `id="toggle-theme"` to toggle dark mode.
- Do **not** remove the `<h3 id="greeting"></h3>` — this is used by JavaScript.

### 🎨 CSS Notes (`home.css`)
- Ensure text is centered.
- Maintain padding of about `80px 20px` for spacing.
- Style list items as capsules using background color and rounded borders.
- Add a hover effect for each team member’s name.
- Include a `.dark-mode` style in global CSS for dark background and light text.
- Make sure it’s responsive — use Flexbox or column layout for mobile screens.

### ⚙️ JavaScript Notes (`script.js`)
- Dynamically show a greeting based on the time of day (Morning, Afternoon, Evening).
- The greeting should be inserted into the element with `id="greeting"`.
- Implement the **dark mode toggle**:
  ```js
  const toggleBtn = document.getElementById("toggle-theme");
  toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  });
  ```
- Test by clicking the button to ensure it toggles correctly.


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
