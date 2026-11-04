import {test, expect} from '@playwright/test';

test('frames Test', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame1 = await page.frameLocator("//frame[@src='frame_3.html']")
    await frame1.locator("[name='mytext3']").fill("Hello Frame 3")
    const frame2 = await frame1.frameLocator("//iframe[@src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
    await frame2.locator("#i6").check()
})