# 👩🏽‍💻 FOXTROT Project — Student Section Guide

This document contains **step-by-step instructions** for each student on how to correctly build their section of the FOXTROT Team Project.  
Each section includes guidance for **HTML**, **CSS**, and **JavaScript** in that order.

---

## 🧩 STUDENT 4 — CONTACT SECTION

### 🧱 HTML Instructions

- Work inside `<main id="contact">`.
- Include a form with the following structure:
  ```html
  <form id="contact-form">
    <label for="name">Name</label>
    <input type="text" id="name" required />

    <label for="email">Email</label>
    <input type="email" id="email" required />

    <label for="message">Message</label>
    <textarea id="message" rows="5"></textarea>

    <button type="submit">Send Message</button>
  </form>
  ```
- Keep form IDs (`#name`, `#email`, `#message`) consistent for JS to work.

### 🎨 CSS Notes (`contact.css`)

- Center the form using `margin: auto;` and `max-width: 400px;`.
- Stack form inputs vertically using `display: flex; flex-direction: column;`.
- Style buttons with consistent color `#0055ff` and hover state `#0044cc`.
- Add subtle padding and rounded borders for input fields.

### ⚙️ JavaScript Notes (`script.js`)

- Select the form and handle its `submit` event.
- Validate that all fields are filled.
- Display alerts accordingly:
  - If any field is empty: “⚠️ Please fill out all fields!”
  - Otherwise: “✅ Thank you, [name]! Your message has been received.”
- Reset the form after submission using `contactForm.reset();`.

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
