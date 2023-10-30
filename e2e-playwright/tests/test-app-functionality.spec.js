const { test, expect } = require("@playwright/test");
const listName = `${Math.floor(Math.random() * 100) + 1}`;
const itemName = `${Math.floor(Math.random() * 400) + 301}`;

test("Main page is titled and contains header and a link to the /lists page.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists");
  await expect(page.locator("h1")).toHaveText("Shared shopping lists");
  await expect(page.locator("a")).toHaveText("Lists");
});

test("Can add a list to a lists page.", async ({ page }) => {
    await page.goto("/lists");
    await page.locator("input[type=text]").type(listName);
    await page.locator("input[value='Create list!']").click();
    await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
  });

test("Can open up the list page.", async ({ page }) => {
    await page.goto("/lists");
    await page.locator(`a >> text='${listName}'`).click();
    await expect(page.locator("h1")).toHaveText(listName);
  });

test("Test adding an item and marking it collected", async ({ page }) => {
    await page.goto("/lists");
    await page.locator(`a >> text='${listName}'`).click();
    await page.locator("input[type=text]").type(itemName);
    await page.locator("input[value='Add item']").click();
    await expect(page.locator(`text='${itemName}'`)).toHaveCount(1);
    await page.locator("input[value='Mark collected!']");
    await expect(page.locator(`text='${itemName}'`)).toHaveCount(1);
  });

test("List disappears after deactivating it.", async ({ page }) => {
    await page.goto("/lists");
    await expect(page.locator(`a >> text='${listName}'`)).toHaveCount(1);
    await page.locator("input[value='Deactivate list!']").click();
    await expect(page.locator(`a >> text='${listName}'`)).toHaveCount(0);
  });