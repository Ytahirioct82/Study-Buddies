const express = require("express");
const events = express.Router();

const {
  getAllEventsOfGroup,
  createEventForGroup,
  getSpecificEvent,
  updateEventDetails,
} = require("../queries/eventFunc.js");

events.get("/:id", async (req, res) => {
  const { id } = req.params;
  const eventDetails = await getSpecificEvent(id);
  try {
    res.status(200).json(eventDetails);
  } catch (error) {
    res.status(404).json(`Page not found:${error}`);
  }
});

events.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await updateEventDetails(id, 2);
  updatedEvent ? res.status(200).json(updatedEvent) : res.status(404).json("Page not found");
});

// events.get("/", async (req, res) => {
//   const { gid } = req.params;
//   console.log(req.params);
//   const allEvents = await getAllEventsOfGroup(gid);
//   try {
//     res.status(200).json(allEvents);
//   } catch (error) {
//     res.status(404).json(`Page not found:${error}`);
//   }
// });

module.exports = events;
