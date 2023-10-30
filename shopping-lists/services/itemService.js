import { executeQuery } from "../database/database.js";

const createItem = async (shopping_list_id, name) => {
  await executeQuery(`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${shopping_list_id},'${name}')`);
};

const getItemCount = async () => {
    let res = await executeQuery(`SELECT COUNT(id) FROM shopping_list_items`);
    return res.rows[0].count
};

const findItemByListId = async (shopping_list_id) => {
    let res = await executeQuery(`SELECT * FROM shopping_list_items WHERE shopping_list_id=(${shopping_list_id}) AND NOT collected ORDER BY name`);
    return res.rows
};

const findCollectedItemByListId = async (shopping_list_id) => {
    let res = await executeQuery(`SELECT * FROM shopping_list_items WHERE shopping_list_id=(${shopping_list_id}) AND collected ORDER BY name`);
    return res.rows
};

const updateItemById = async (item_id) => {
    await executeQuery(`UPDATE shopping_list_items set collected=TRUE WHERE id=(${item_id})`);
};

const updateItemByListId = async (shopping_list_id) => {
    await executeQuery(`UPDATE shopping_list_items set collected=TRUE WHERE shopping_list_id=(${shopping_list_id}})`);
};

export {createItem, getItemCount, findItemByListId, findCollectedItemByListId, updateItemById, updateItemByListId};