import { chromium, expect } from "@playwright/test";

async function globalSetup() {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.click('button[type="submit"]')
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')    
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible()
    await page.context().storageState({ path: './playwright/.auth/user.json' })
}

export default globalSetup