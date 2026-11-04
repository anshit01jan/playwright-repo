import { LoginPage } from "../pom/LoginPage.spec";
import { HomePage } from "../pom/HomePage.spec";
import { expect, test } from '@playwright/test';

test('loginTest', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl('https://www.demoblaze.com/index.html#')
    await loginPage.login('anshit1', 'Anshit123@')
    const homePage = new HomePage(page);
    await homePage.logOutVisible();
    await expect(homePage.logOutBtn).toBeVisible()
})