const { group } = require("console");
const express = require("express");
const groups = express.Router();
const eventsController = require("./eventsController");
const { getAllGroups, getGroupDetails, createNewGroup, updateGroupDetails } = require("../queries/groupFunc.js");

groups.use("/:gid/events", eventsController);

groups
  .route("/")
  .get(async (req, res) => {
    try {
      const AllGroups = await getAllGroups();
      res.status(200).json(AllGroups);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  })

  .post(async (req, res) => {
    try {
      const newGroup = await createNewGroup(req.body);
      res.status(200).json(newGroup);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  });

groups
  .route("/:gid")
  .get(async (req, res) => {
    try {
      const { gid } = req.params;
      const oneGroup = await getGroupDetails(gid);
      res.status(200).json(oneGroup);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  })

  .put(async (req, res) => {
    try {
      const { gid } = req.params;
      const updated = await updateGroupDetails(gid, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json(`The following has occurred: ${error.message}`);
    }
  });

module.exports = groups;
