import { Browser, BrowserContext, chromium, Page } from "playwright";

export default class BasePO {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async clickButtonWithName (btnName: string) {
        await this.page.getByRole('button', { name: btnName }).click();
    }

    async clickLinkWithName (linkName: string) {
        await this.page.getByRole('link', { name: linkName }).click();
    }

    //Add more common methods here
}  