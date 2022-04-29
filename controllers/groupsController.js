const express = require("express");
const groups = express.Router();
const {
  getAllGroups,
  getGroupDetails,
  createNewGroup,
  updateGroupDetails,
  getAllEventsOfGroup,
  createEventForGroup,
} = require("../queries/events.js");

groups.get("/", async (req, res) => {
  const { id, type } = req.query;

  if (type === "event") {
    const AllEventsOfGroup = await getAllEventsOfGroup(id);
    AllEventsOfGroup ? res.send(AllEventsOfGroup) : res.status(404).json("Page not found");
  } else {
    const AllGroups = await getAllGroups();
    AllGroups ? res.send(AllGroups) : res.status(404).json("Page not found");
  }
});

groups.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneGroup = await getGroupDetails(id);
  oneGroup ? res.send(oneGroup) : res.status(404).json("Page not found");
});

groups.post("/", async (req, res) => {
  const { id, type } = req.query;
  if (type === "event") {
    const newGroupEvent = await createEventForGroup(id, req.body);
    newGroupEvent ? res.send(newGroupEvent) : res.status(404).json("Page not found");
  } else {
    const newGroup = await createNewGroup(req.body);
    newGroup ? res.send(newGroup) : res.status(404).json("Page not found");
  }
});

groups.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updated = await updateGroupDetails(id);
  updated ? res.send(updated) : res.status(404).json("Page not found");
});

module.exports = groups;
