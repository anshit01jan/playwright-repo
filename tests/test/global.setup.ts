import {test, expect} from "@playwright/test"

test("Handle storage state second way", async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.click('button[type="submit"]')
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')    
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible()
    await page.context().storageState({ path: './playwright/.auth1/user.json' })
})