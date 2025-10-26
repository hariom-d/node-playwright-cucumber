import { Browser, BrowserContext, chromium, Page } from "playwright";
import * as locators from "../locators/pageLocators.json";

export default class HomePO {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(locators.homePageLocators.URL);
    }

    async getHomePageTitle() {

        const title = await this.page.title();
    }

}  