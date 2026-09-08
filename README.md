# Student Information System 🎓

## Project Title
Lab Exercise: Collaborative Git Workflow Using a Simple Web Application

---

## Team Members

* **Student 1 (Team Lead / Developer):** Ananya S Shetty(ananya.shetty@mca.christuniversity.in)
* **Student 2 (UI Developer):** Renoreji matthew (renoreji.matthew@mca.christuniversity.in)
* **Student 3 (JavaScript Developer):** Kripa dhandhania (kripa.dhandhania@mca.christuniversity.in)

---

## Project Description
This repository contains a simple Student Information Web Application built as part of a collaborative Git workflow lab exercise. The application displays basic student profile details (Name: Cynthia, Register Number: 101, Programme: MCA) with interactive details and styled layout.

The primary purpose of this project is NOT to build a complex web app, but to learn essential collaborative Git workflows: configuring Git locally, creating isolated feature branches, making atomic commits, reviewing Pull Requests, working simultaneously with teammates without overwriting code, and intentionally creating and resolving merge conflicts.

---

## Technologies Used
* **HTML5** – Web page structure
* **CSS3** – Application styling and card layout
* **JavaScript (ES6)** – Front-end button click functionality
* **Git & GitHub** – Version control, feature branching, PR reviews, and conflict management

---

## Git Branching Strategy
To ensure team members work collaboratively without directly modifying or overwriting the `main` branch, all feature development takes place on dedicated isolated branches before merging via Pull Requests.

### Branches Created
* `main` – Base production code created by Ananya.
* `feature/ui` – Created by Reno to add card layout, spacing, and button styles.
* `feature/javascript` – Created by Kripa to add the "Show Details" button functionality.
* `feature/contact` – Created by Reno to add email and phone contact details.
* `feature/student-name` – Created by Reno to update heading to `<h1>Student Management System</h1>`.
* `feature/app-title` – Created by Kripa to update heading to `<h1>MCA Student Information Portal</h1>`.

---

## Pull Requests Created

| Pull Request | Source Branch | Target Branch | Author | Reviewer | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PR #1** | `feature/ui` | `main` | Reno | Ananya | Merged |
| **PR #2** | `feature/javascript` | `main` | Kripa | Ananya | Merged |
| **PR #3** | `feature/contact` | `main` | Reno | Ananya | Merged |
| **PR #4** | `feature/student-name` | `main` | Reno | Ananya | Merged |
| **PR #5** | `feature/app-title` | `main` | Kripa | Ananya | Merged (Conflict Resolved) |

---

## Merge Conflict

### What caused the conflict?
A merge conflict was intentionally created between `feature/student-name` (Reno) and `feature/app-title` (Kripa). Both branches were created from the same earlier commit on `main` and edited the **exact same line** in `index.html`:

* **Reno edited line 10 to:** `<h1>Student Management System</h1>`
* **Kripa edited line 10 to:** `<h1>MCA Student Information Portal</h1>`

When Reno's PR (`feature/student-name`) was merged into `main` first by Ananya, `main` received the updated heading. When Kripa attempted to merge `feature/app-title`, GitHub flagged a content conflict because Git could not automatically determine which title to keep.

### How was it resolved?
1. Kripa updated her local repository by pulling the latest changes from `main` into `feature/app-title` (`git merge main`).
2. Git generated conflict markers in `index.html`:
```html
   <<<<<<< HEAD
   <h1>MCA Student Information Portal</h1>
   =======
   <h1>Student Management System</h1>
   >>>>>>> main
```
3. Kripa resolved the conflict by combining both versions into an agreed title:
```html
   <h1>Student Management System – MCA</h1>
```
4. All conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were removed.
5. Kripa staged the resolved file (`git add index.html`), committed the resolution (`git commit -m "Resolve merge conflict in application title"`), and pushed the changes (`git push origin feature/app-title`).
6. Ananya reviewed and approved the now-mergeable Pull Request.

## How to Run the Application

1. Clone the repository to your local machine:
```bash
   git clone <repository-url>
```
2. Navigate into the project directory:
```bash
   cd student-info-app
```
3. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, or Safari).
4. Click the **Show Details** button to toggle additional student details.
