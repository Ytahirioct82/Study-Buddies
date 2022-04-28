// DEPENDENCIES
const express = require("express");
const cors = require("cors");

const groupsController = require("./controllers/groupsController");
const eventsController = require("./controllers/eventsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/groups", groupsController);
app.use("/events", eventsController);

// ROUTES
app.get("/", (_, res) => {
  res.send("Welcome to Study Buddy App!");
});

app.get("*", (_, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
