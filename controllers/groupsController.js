const { group } = require("console");
const express = require("express");
const groups = express.Router();
const eventsController = require("./eventsController");
const { getAllGroups, getGroupDetails, createNewGroup, updateGroupDetails } = require("../queries/groupFunc.js");

groups.use("/:gid/events", eventsController);

groups.get("/", async (req, res) => {
  const AllGroups = await getAllGroups();
  try {
    res.status(200).json(AllGroups);
  } catch (error) {
    res.status(404).json(`Page Not Found: ${error}`);
  }
});

groups.get("/:gid", async (req, res) => {
  const { gid } = req.params;
  const oneGroup = await getGroupDetails(gid);
  try {
    res.status(200).json(oneGroup);
  } catch (error) {
    res.status(404).json(`Page Not Found: ${error}`);
  }
});

groups.post("/", async (req, res) => {
  const newGroup = await createNewGroup(req.body);
  try {
    res.status(200).json(newGroup);
  } catch (error) {
    res.status(404).json(`Page Not Found: ${error}`);
  }
});

groups.put("/:gid", async (req, res) => {
  const { gid } = req.params;
  const updated = await updateGroupDetails(gid, req.body);
  try {
    res.status(200).json(updated);
  } catch (error) {
    res.status(404).json(`Page Not Found: ${error}`);
  }
});

module.exports = groups;
