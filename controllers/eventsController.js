const express = require("express");
const events = express.Router();
const { getSpecificEvent, updateEventDetails } = require("../queries/events.js");

events.get("/:id", async (req, res) => {
  const { id } = req.params;
  const eventDetails = await getSpecificEvent(id);
  eventDetails ? res.send(eventDetails) : res.status(404).json("Page not found");
});

events.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await updateEventDetails(id);
  updatedEvent ? res.send(updatedEvent) : res.status(404).json("Page not found");
});

module.exports = events;
