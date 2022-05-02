const express = require("express");
const events = express.Router({ mergeParams: true });

const {
  getAllEventsOfGroup,
  createEventForGroup,
  getSpecificEvent,
  updateEventDetails,
} = require("../queries/eventFunc.js");

events
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const eventDetails = await getSpecificEvent(id);
      res.status(200).json(eventDetails);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  })

  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const updatedEvent = await updateEventDetails(id, 2);
      res.status(200).json(updatedEvent);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  });

events
  .route("/")
  .get(async (req, res) => {
    try {
      const { gid } = req.params;
      const allEvents = await getAllEventsOfGroup(gid);
      res.status(200).json(allEvents);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  })

  .post(async (req, res) => {
    try {
      const { gid } = req.params;
      const newEvent = await createEventForGroup(gid, req.body);
      res.status(200).json(newEvent);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  });

module.exports = events;
