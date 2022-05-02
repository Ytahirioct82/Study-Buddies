const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
  try {
    const AllGroups = await db.any("SELECT * FROM study_groups ORDER BY name");
    return AllGroups;
  } catch (error) {
    return error;
  }
};

const getGroupDetails = async (gid) => {
  try {
    const oneGroupDetails = await db.one("SELECT * FROM study_groups WHERE id=$1", gid);
    return oneGroupDetails;
  } catch (error) {
    return error;
  }
};

const createNewGroup = async (addGroup) => {
  const { name, main_focus, formed, contact } = addGroup;

  try {
    const newGroup = await db.one(
      "INSERT INTO study_groups (name, main_focus, formed, contact) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, main_focus, formed, contact]
    );
    return newGroup;
  } catch (error) {
    return error;
  }
};

const updateGroupDetails = async (gid, editGroup) => {
  const { name, main_focus, formed, contact } = editGroup;
  try {
    const update = await db.one(
      "UPDATE study_groups SET name=$1, main_focus=$2, formed=$3, contact=$4  WHERE id=$5 RETURNING *",
      [name, main_focus, formed, contact, gid]
    );
    return update;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGroups,
  getGroupDetails,
  createNewGroup,
  updateGroupDetails,
};
