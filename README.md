# 👩🏽‍💻 STUDENT GUIDE

Welcome to the **FOXTROT Team Collaboration Project**! 🎉  
You’ll build one part of a shared website with your teammates while learning HTML, CSS, JavaScript, and GitHub collaboration.

---

## Tech Stack

- **HTML5**: Structure.
- **CSS3**: Styling (no frameworks).
- **Vanilla JavaScript**: Basic interactions (no libraries).
- **Git/GitHub**: Version control and hosting.
- **Tools**: VS Code (free editor), browser for testing.

**Files**:

- `index.html`: The main page.
- `styles.css`: Stylesheet (Week 2+).
- `script.js`: JavaScript (Week 3+).

## Setup Instructions

1. **Fork the Repo**:

   - Go to the teacher's repo: [https://github.com/Foxtrot-Cohort/TeamFox](https://github.com/Foxtrot-Cohort/TeamFox)
   - Click **Fork** to create your copy. This is your safe playground.

2. **Clone Locally**:

   - Open terminal (or Git Bash).

   ```bash
   git clone https://github.com/<your-username>/TeamFox.git
   ```

   - `cd into your cloned folder`

3. **Add Upstream (for Pulling Updates)**:

   ```bash
   git remote add upstream https://github.com/Foxtrot-Cohort/TeamFox.git`
   ```

   - ALWAYS PULL LATEST UPDATES: `git pull upstream main` before starting work.

4. **Open in Vs code**: Type `code .`

5. **Test Locally**: Open `index.html` in your browser. For live reload, right-click in VS Code > "Open with Live Server".

6. **GitHub Pages (Bonus)**: Once merged, view live site at `https://foxtrot-cohort.github.io/TeamFox/`.

## Git Workflow (Real-World Team Style)

**Goal**: No delays, no conflicts—work independently, submit for review.

1. **Start Fresh**: `git pull upstream main` to get latest.

2. **Create Branch**: `git checkout -b your-name-week-task` (e.g., `git checkout -b alex-week1-html`).

3. **Make Changes**: Edit only **your section** (fenced by `<!-- STUDENT X: ... -->`).

4. **Commit & Push**:

   - `git add .`
   - `git commit -m "Week 1: Added HTML for Home section"`
   - `git push origin your-name-week-task`

5. **Pull Request (PR)**:
   - On GitHub, go to your fork > "Compare & pull request".
   - Base: Teacher's `main` branch.
   - Description: "Added [details]. Tested locally. No conflicts expected." Tag teacher/teammates.
   - Teacher merges after review.

**Tips to Avoid Conflicts**:

- Edit **only** your fenced section in HTML.
- Append your code to the end of CSS/JS files with a comment header (e.g., `/* Student 1: Home Styles */`).
- Use ID selectors (e.g., `#home`) for CSS/JS—keeps it isolated.
- If conflicts pop up (rare): GitHub shows diffs in PR; resolve in your branch.

## 🧱 Sections

| Student | Section  | Folder/File                  |
| ------- | -------- | ---------------------------- |
| 1       | Home     | `#home` + `home.css`         |
| 2       | About    | `#about` + `about.css`       |
| 3       | Projects | `#projects` + `projects.css` |
| 4       | Contact  | `#contact` + `contact.css`   |
| 5       | Journal  | `#journal` + `journal.css`   |

---

## 🧩 Project Breakdown

### 🗓️ HTML

- Build your section layout and content.
- Use semantic tags and placeholder text.

### 🎨 CSS

- Style your section using your own CSS file.
- Keep colors and fonts consistent with the site.

### ⚙️ JavaScript

- Add interactivity to your section (e.g., hover effects, validation, dynamic data).

---

## 💻 Git Commands

| Action       | Command                                 |
| ------------ | --------------------------------------- |
| Check branch | `git branch`                            |
| Add changes  | `git add .`                             |
| Commit       | `git commit -m "Added about section"`   |
| Push         | `git push origin feature/about-section` |
| Pull updates | `git pull upstream main`                |

---

## 🚀 Submission

1. Push your branch to GitHub.
2. Create a Pull Request (PR).
3. Title it clearly, e.g. **“Student 2 – About Section Completed.”**
4. Wait for your instructor’s review and merge.

---

## 🧾 Personal Progress Checklist

| Task           | Done |
| -------------- | ---- |
| Forked repo    | ☐    |
| Created branch | ☐    |
| Completed HTML | ☐    |
| Completed CSS  | ☐    |
| Added JS       | ☐    |
| Pushed changes | ☐    |
| PR created     | ☐    |
| PR merged      | ☐    |

---

## 🏁 Congratulations

By completing this, you’ll have learned:

- How to work as a developer in a team 💻
- How to use GitHub like professionals 🌍
- How to build a full website collaboratively 🚀

Keep coding and collaborating — you’re on your way to becoming a pro developer! 🌟
