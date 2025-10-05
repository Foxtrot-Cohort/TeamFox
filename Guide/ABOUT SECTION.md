# 👩🏽‍💻 FOXTROT Project — Student Section Guide

This document contains **step-by-step instructions** for each student on how to correctly build their section of the FOXTROT Team Project.  
Each section includes guidance for **HTML**, **CSS**, and **JavaScript** in that order.

---

## 🧩 STUDENT 2 — ABOUT SECTION

### 🧱 HTML Instructions

- Work inside `<main id="about">`.
- Add 6 team member `<section class="member">` blocks.
- Each should include:
  ```html
  <img
    src="https://image-placeholder.com/images/actual-size/75x75.png"
    alt="Member Name"
  />
  <h3>Member Name</h3>
  <p>Short description about the member</p>
  ```
- Keep this static version as fallback for browsers with JavaScript disabled.

### 🎨 CSS Notes (`about.css`)

- Center all text.
- Give `.member` sections background color `#f4f7ff` and rounded corners.
- Add box-shadow for depth and spacing between members.
- Include `.generated-members` and `.member.generated` classes for the dynamic version.
- Use consistent colors: `#0055ff` for headings and a soft tone for backgrounds.

### ⚙️ JavaScript Notes (`script.js`)

- Create an array of objects with each member’s name, role, about text, and image URL.
- Dynamically generate new member cards using JavaScript.
- Append them **below** the static HTML version or replace the static ones entirely.
- Example structure:
  ```js
  const teamMembers = [
    {
      name: "Double D",
      role: "Team Lead",
      about: "Leads the team",
      image: "image-url",
    },
    // ...
  ];
  ```
- Style the generated section slightly differently to show it was created with JS.

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
