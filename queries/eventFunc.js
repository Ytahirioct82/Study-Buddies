const db = require("../db/dbConfig.js");

const getAllEventsOfGroup = async (gid) => {
  try {
    console.log(gid);
    const AllEventsOfGroup = await db.any("SELECT * FROM events WHERE study_group_id=$1", gid);
    return AllEventsOfGroup;
  } catch (error) {
    return error;
  }
};

const createEventForGroup = async (gid, addEvent) => {
  console.log(addEvent);
  const { name, virtual_meeting_link, start_time, end_time, number_of_attendees, cancelled } = addEvent;

  try {
    const newEvent = await db.one(
      "INSERT INTO events (name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, virtual_meeting_link, gid, start_time, end_time, number_of_attendees, cancelled]
    );
    return newEvent;
  } catch (error) {
    return error;
  }
};

const getSpecificEvent = async (id) => {
  try {
    const eventDetails = await db.one("SELECT * FROM events WHERE id=$1", id);
    return eventDetails;
  } catch (error) {
    return error;
  }
};

const updateEventDetails = async (id, editEvent) => {
  const { name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled } =
    editEvent;
  try {
    const updatedEvent = await await db.one(
      "UPDATE events SET name=$1, virtual_meeting_link=$2, study_group_id=$3, start_time=$4, end_time=$5, number_of_attendees=$6, cancelled=$7 WHERE id=$8 RETURNING *",
      [name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees, cancelled, id]
    );
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
