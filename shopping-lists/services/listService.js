import { executeQuery } from "../database/database.js";

const create = async (name) => {
  await executeQuery(`INSERT INTO shopping_lists (name) VALUES ('${ name }')`);
};

const findLists = async () => {
  let res = await executeQuery(`SELECT * FROM shopping_lists WHERE active = TRUE ORDER BY name`);
  return res.rows
};

const getListCount = async () => {
  let res = await executeQuery(`SELECT COUNT(id) FROM shopping_lists`);
  return res.rows[0].count
};

const findListById = async (id) => {
  let res = await executeQuery(`SELECT * FROM shopping_lists WHERE id= (${ id })`);
  if (res.rows && res.rows.length > 0) {
      return res.rows[0];
  }
  return { id: 0, name: "No list found" };
};

const updateListById = async (id) => {
  await executeQuery(`UPDATE shopping_lists set active=FALSE WHERE id=(${id})`);
}

export { create, findLists, getListCount, findListById, updateListById};