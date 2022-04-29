//const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
  try {
    const AllGroups = await "Returns a list of all groups.";
    return AllGroups;
  } catch (error) {
    return error;
  }
};

const getGroupDetails = async (id) => {
  try {
    const oneGroupDetails = await `Returns details about the group with an id of ${id} .`;
    return oneGroupDetails;
  } catch (error) {
    return error;
  }
};

const createNewGroup = async (body) => {
  try {
    const newGroup = await body;

    return newGroup;
  } catch (error) {
    return error;
  }
};

const updateGroupDetails = async (id, body) => {
  try {
    const update = await `Update details of the group with an id of: ${id} `;
    return update;
  } catch (error) {
    return error;
  }
};

const getAllEventsOfGroup = async (id) => {
  try {
    const AllEventsOfGroup = await `Return all events associated with the group with and id of: ${id} .`;
    return AllEventsOfGroup;
  } catch (error) {
    return error;
  }
};

const createEventForGroup = async (id, body) => {
  try {
    const newEventForGroup = await body;
    return newEventForGroup;
  } catch (error) {
    return error;
  }
};

const getSpecificEvent = async (id) => {
  try {
    const eventDetails = await `Returns the details of an event with an id of ${id} .`;
    return eventDetails;
  } catch (error) {
    return error;
  }
};

const updateEventDetails = async (id, body) => {
  try {
    const updatedEvent = await `Update details of the event with an id of: ${id} `;
    return updatedEvent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGroups,
  getGroupDetails,
  createNewGroup,
  updateGroupDetails,
  getAllEventsOfGroup,
  createEventForGroup,
  getSpecificEvent,
  updateEventDetails,
};
