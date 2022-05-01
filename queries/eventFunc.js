const db = require("../db/dbConfig.js");

const getAllEventsOfGroup = async (gid) => {
  try {
    const AllEventsOfGroup = await `Return all events associated with the group with and id of: ${gid} .`;
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
  getAllEventsOfGroup,
  createEventForGroup,
  getSpecificEvent,
  updateEventDetails,
};
