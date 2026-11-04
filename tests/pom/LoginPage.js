export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('#login2')
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.submitBtn = page.locator('//button[text()="Log in"]')
    }

    async launchUrl(url){
        await this.page.goto(url)
    }

    async login(username, password) {
        await this.loginBtn.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitBtn.click();
    }
}
