const express = require("express");
const events = express.Router();

const { getSpecificEvent, updateEventDetails } = require("../queries/eventFunc.js");

events.get("/:id", async (req, res) => {
  const { id } = req.params;
  const eventDetails = await getSpecificEvent(id);
  eventDetails ? res.status(200).json(eventDetails) : res.status(404).json("Page not found");
});

events.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await updateEventDetails(id);
  updatedEvent ? res.status(200).json(updatedEvent) : res.status(404).json("Page not found");
});

module.exports = events;
