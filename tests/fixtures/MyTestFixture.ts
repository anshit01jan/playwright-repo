import {test as baseTest} from "@playwright/test";
import {SauceHomePage} from "../pom/SauceHomePage";
import {SauceProductPage} from "../pom/SauceProductPage";

type MyFixture = {
    sauceHomePage: SauceHomePage
    sauceProductPage: SauceProductPage
}

export const test = baseTest.extend<MyFixture>({
    sauceHomePage: async({page}, use) => {
        const sauceHomePage = new SauceHomePage(page);
        await use(sauceHomePage)
    },
    sauceProductPage: async({page}, use) => {
        await use(new SauceProductPage(page))
    }
})


