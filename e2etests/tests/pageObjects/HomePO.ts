import { Browser, BrowserContext, chromium, Page } from "playwright";

export default class HomePO {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/");
    }

    async getHomePageTitle() {

        const title = await this.page.title();
    }

}  