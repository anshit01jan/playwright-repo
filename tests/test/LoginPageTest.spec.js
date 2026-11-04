import {test} from '../fixtures/MyTestFixture';
import { expect } from '@playwright/test';

test("Login with valid credentials", async({sauceHomePage, sauceProductPage}) => {
    await sauceHomePage.openUrl('https://www.saucedemo.com/')
    await sauceHomePage.login('standard_user', 'secret_sauce')
    await sauceProductPage.addToCart()
    await expect(sauceProductPage.cartIcon).toHaveText('1')
    await expect(sauceProductPage.sauceBackPackRemoveButton).toBeVisible()
    })