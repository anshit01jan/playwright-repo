import {test, expect} from "@playwright/test"

test("Handle new pages", async({context}) => {
    const page = await context.newPage()
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/")
    const pagePromise = context.waitForEvent("page")
    await page.getByRole("link", {name:'Window with name in new tab'}).click()
    const newPage = await pagePromise
    const t1 = newPage.getByText('Linked Page with Window Name')
    await expect(t1).toHaveText('Linked Page with Window Name')


})