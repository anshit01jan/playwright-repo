import { test, expect } from '@playwright/test';
import testData from "../../data.json";

test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByPlaceholder('Username').fill(testData.username)
        await page.getByPlaceholder('Password').fill(testData.password)
        await page.click('button[type="submit"]')
        await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')    
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible()
});


testData.candidates.forEach((item) => {
    test(`Orange HRM Test Parametrize - ${item.firstName} ${item.lastName}`, async ({ page }) => {
        await page.click("//span[text() = 'Recruitment']")
        await page.getByRole('button', { name: ' Add' }).click();
        await page.getByRole('heading', { name: 'Add Candidate' }).waitFor()
        await page.getByPlaceholder('First Name').fill(item.firstName)
        await page.getByPlaceholder('Middle Name').fill(item.middleName)
        await page.getByPlaceholder('Last Name').fill(item.lastName)
        await page.getByPlaceholder('Type here').nth(0).fill(item.email)
        await page.getByPlaceholder('Type here').nth(1).fill(item.phoneNumber)
        await page.getByPlaceholder('Type here').nth(2).fill(item.notes)
        await page.getByRole('button', { name: 'Save' }).click()
        await page.getByRole('heading', { name: 'Application Stage' }).waitFor()
        await expect(page.getByRole('heading', { name: 'Application Stage' })).toBeVisible()
    });
})
