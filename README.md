# Decode Labs Full Stack Internship — Charbel Antonios

Weekly project submissions for the Decode Labs Full Stack Development internship (July–August 2026).

---

## Project 1 — Responsive Frontend Interface
**Folder:** `week1-responsive-frontend/`

A responsive landing page for **PeakPace**, a concept running/fitness-tracking app themed around routes from the Lebanese coast to the mountains.

**Built with:** HTML5, CSS3 (Grid + Flexbox), vanilla JavaScript — no frameworks.

**Features:**
- Mobile-first layout with breakpoints at 768px (tablet) and 1024px (desktop)
- Semantic HTML structure (`header`, `nav`, `main`, `footer`)
- Accessible mobile navigation (keyboard-friendly, `aria-expanded` toggle)
- Fluid typography using `clamp()`

**To run:**
Open `week1-responsive-frontend/index.html` directly in a browser, or use the VS Code Live Server extension.

---

## Project 2 — Backend API Development
**Folder:** `week2-backend-api/`

A small Node.js + Express REST API that would power the PeakPace app — storing and retrieving logged runs.

**Built with:** Node.js, Express.

**Endpoints:**
| Method | Route            | Description                          |
|--------|------------------|---------------------------------------|
| GET    | `/api/runs`      | Returns all logged runs               |
| GET    | `/api/runs/:id`  | Returns a single run, or `404` if not found |
| POST   | `/api/runs`      | Adds a new run (validates input, returns `400` on invalid data) |

**Validation rules for POST:**
- `distance`, `duration`, and `date` are all required
- `distance` and `duration` must be numbers greater than 0

**To run:**
```bash
cd week2-backend-api
npm install
node server.js
```
Server runs at `http://localhost:3000`. Test `GET` requests directly in a browser, or use a tool like Thunder Client / Postman for `POST` requests.

---

## Tech stack summary
- HTML5, CSS3, JavaScript (ES6)
- Node.js, Express
- Git & GitHub for version control
