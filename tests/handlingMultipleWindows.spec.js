import { test, expect } from '@playwright/test';

test('handling multiple windows', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pageContext = await page.context()
    const [newPage] = await Promise.all([
        pageContext.waitForEvent('page'),
         page.locator('text=OrangeHRM, Inc').click()
    ])
    expect(await newPage.title()).toStrictEqual('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');
});