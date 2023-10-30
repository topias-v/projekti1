import { renderFile } from "../deps.js";
import * as listService from "../services/listService.js";
import * as itemService from "../services/itemService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const Statistics = async (request) => {
    const data = {
        lists_count: await listService.getListCount(),
        items_count: await itemService.getItemCount(),
    }
    return new Response(await renderFile("index.eta", data), responseDetails);
}

export { Statistics }