import {test, expect} from '@playwright/test';

test('builtin-locators test', async ({page}) => {
    await page.goto('https://playwright.dev');
    const getStarted = page.getByRole('link', {name: 'Get started'});
    await getStarted.click();
    const installationHeading = page.getByRole('heading', {name: 'Installation'});
    await expect(installationHeading).toBeVisible();
});
