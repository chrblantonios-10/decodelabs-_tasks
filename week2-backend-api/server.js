// server.js
// A simple backend API for PeakPace — logs and retrieves runs.

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: lets Express understand JSON sent in a request body
app.use(express.json());

// In-memory "database" — just an array, resets when the server restarts
let runs = [
  { id: 1, distance: 5.2, duration: 28, date: "2026-07-20" },
  { id: 2, distance: 3.2, duration: 15.5, date: "2026-07-22" }
];

// Keeps track of the next id to assign
let nextId = 3;

// ------------------------------------------------
// GET /api/runs — return every logged run
// ------------------------------------------------
app.get('/api/runs', (req, res) => {
  res.status(200).json(runs);
});

// ------------------------------------------------
// GET /api/runs/:id — return a single run by id
// ------------------------------------------------
app.get('/api/runs/:id', (req, res) => {
  const id = Number(req.params.id);
  const run = runs.find((r) => r.id === id);

  if (!run) {
    return res.status(404).json({ error: `Run with id ${id} not found.` });
  }

  res.status(200).json(run);
});

// ------------------------------------------------
// POST /api/runs — add a new run
// ------------------------------------------------
app.post('/api/runs', (req, res) => {
  const { distance, duration, date } = req.body;

  // Validation — never trust the client, always check before saving
  if (!distance || !duration || !date) {
    return res.status(400).json({
      error: "distance, duration, and date are all required."
    });
  }

  if (typeof distance !== 'number' || typeof duration !== 'number') {
    return res.status(400).json({
      error: "distance and duration must be numbers."
    });
  }

  if (distance <= 0 || duration <= 0) {
    return res.status(400).json({
      error: "distance and duration must be greater than 0."
    });
  }

  const newRun = {
    id: nextId++,
    distance,
    duration,
    date
  };

  runs.push(newRun);

  // 201 = "Created" — the correct status code for a successful POST
  res.status(201).json(newRun);
});

// ------------------------------------------------
// Start the server
// ------------------------------------------------
app.listen(PORT, () => {
  console.log(`PeakPace API running at http://localhost:${PORT}`);
});