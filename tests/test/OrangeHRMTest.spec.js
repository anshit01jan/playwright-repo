import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});

test("click on Time section and verify page", async ({ page }) => {
  await page.click("//span[text()='Time']")  
  await expect(page.getByRole("heading", { name: "Select Employee" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Timesheets Pending Action" })).toBeVisible();
});

test("click on Leave section and verify page", async ({ page }) => {
  await page.click("//span[text()='Leave']")  
  await expect(page.getByRole("heading", { name: "Leave List" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Leave" })).toBeVisible();
});