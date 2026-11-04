import {test, expect} from '@playwright/test';

test('alerts test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on("dialog", async (dialog) => {
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.click("#alertBtn")
})

test('confirm alert box', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on("dialog", async (dialog) => {
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.click("#confirmBtn");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")
})

test('prompt alert box', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on("dialog", async(dialog) => {
        expect(await dialog.message()).toBe("Please enter your name:")
        expect(await dialog.defaultValue()).toBe("Harry Potter")
        expect(await dialog.accept("Hermione Granger"))
    })
    await page.click("#promptBtn");
    expect(await page.locator("#demo")).toContainText("Hermione Granger")
    })