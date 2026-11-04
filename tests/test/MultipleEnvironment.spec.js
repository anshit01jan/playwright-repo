import {test, expect} from '@playwright/test';

test('Multiple Environment Test', async ({page}) => {
    await page.goto(process.env.URL);
    await page.fill('#user-name', process.env.username);
    await page.fill('#password', process.env.password);
    await page.click('#login-button');
})