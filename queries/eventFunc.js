const db = require("../db/dbConfig.js");

const getAllEventsOfGroup = async (gid) => {
  try {
    const AllEventsOfGroup = await db.any("SELECT * FROM events WHERE study_group_id=$1", gid);
    return AllEventsOfGroup;
  } catch (error) {
    throw error;
  }
};

const createEventForGroup = async (gid, addEvent) => {
  try {
    const { name, virtual_meeting_link, start_time, end_time, number_of_attendees, cancelled } = addEvent;
    const newEvent = await db.one(
      "INSERT INTO events (name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, virtual_meeting_link, gid, start_time, end_time, number_of_attendees, cancelled]
    );
    return newEvent;
  } catch (error) {
    throw error;
  }
};

const getSpecificEvent = async (id) => {
  try {
    const eventDetails = await db.one("SELECT * FROM events WHERE id=$1", id);
    return eventDetails;
  } catch (error) {
    throw error;
  }
};

const updateEventDetails = async (id, editEvent) => {
  try {
    const { name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled } =
      editEvent;
    const updatedEvent = await await db.one(
      "UPDATE events SET name=$1, virtual_meeting_link=$2, study_group_id=$3, start_time=$4, end_time=$5, number_of_attendees=$6, cancelled=$7 WHERE id=$8 RETURNING *",
      [name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled, id]
    );
    return updatedEvent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEventsOfGroup,
  createEventForGroup,
  getSpecificEvent,
  updateEventDetails,
};
