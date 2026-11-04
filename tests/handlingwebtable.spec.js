import {test,expect} from '@playwright/test';

test.skip('handling webtable', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
   const webTable = await page.locator("#productTable")
   const checkBox = await webTable.locator("tr")
   .filter({hasText: "Smartwatch"})
    await checkBox.locator("input[type='checkbox']").check()
})

test('Getting all the rows and columns of the webtable', async({page}) => {
    let p =1;
    await page.goto("https://testautomationpractice.blogspot.com/")
    const pagination = await page.locator("#pagination li");
    const pageCount = await pagination.count();
    const webTable = await page.locator("#productTable")
    const rows = webTable.locator("tbody tr")
    const columns = webTable.locator("thead tr th")
    console.log("Total number of rows in the webtable are: " + await rows.count())
    console.log("Total number of columns in the webtable are: " + await columns.count())
    while(p <= pageCount){
    for(let i=0; i< await rows.count(); i++){
        for(let j=0; j< await columns.count() - 1; j++){
            console.log(await rows.nth(i).locator("td").nth(j).textContent())
    }
}
        if(p < pageCount){
            await pagination.nth(p).click()
        }
        p++;
    }
})