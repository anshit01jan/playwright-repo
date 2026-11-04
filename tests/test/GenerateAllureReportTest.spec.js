import {test, expect} from '@playwright/test';

test('Google Title Test 1', async ({page}) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

test('Google Title Test 2', async ({page}) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

test('Google Title Test 3', async ({page}) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google1');
});