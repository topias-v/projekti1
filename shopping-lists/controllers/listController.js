import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as listService from "../services/listService.js";
import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return requestUtils.redirectTo("/lists");
};

const viewLists = async (request) => {
  const data = {
      lists: await listService.findLists(),
  }
  return new Response(await renderFile("lists.eta", data), responseDetails);
}

const updateLists = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  let id = urlParts[2]

  await listService.updateListById(id)

  return requestUtils.redirectTo("/lists")
}

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  let id = urlParts[2]
  const data = {
    list : await listService.findListById(id),
    items : await itemService.findItemByListId(id),
    collected_items : await itemService.findCollectedItemByListId(id)
  };
  return new Response(await renderFile("list.eta", data), responseDetails);
};

export {addList, viewLists, updateLists, viewList};