export class HomePage {
    constructor(page) {
        this.page = page;
        this.logOutBtn = page.locator('#logout2')
        this.productNames = page.locator('.card-title a')
    }

    async logOut(){
        await this.logOutBtn.click();
    }

    async checkProductExistence(productName) {
        const product = this.productNames.filter({ hasText: productName });
        return await product.count() > 0;
    }

    async logOutVisible(){
        await this.logOutBtn.waitFor({ state: 'visible' });
    }
}