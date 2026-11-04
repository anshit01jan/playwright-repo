import {Locator, Page} from "@playwright/test";

export class SauceProductPage {
    readonly page:Page;
    readonly sauceBackPackAddToCartButton:Locator;
    readonly sauceBackPackRemoveButton:Locator;
    readonly cartIcon:Locator;

    constructor(page:Page){
        this.page = page;
        this.sauceBackPackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.sauceBackPackRemoveButton = page.locator('#remove-sauce-labs-backpack')
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addToCart(){
        await this.sauceBackPackAddToCartButton.waitFor({state: 'visible'});
       await this.sauceBackPackAddToCartButton.click();
    }


}