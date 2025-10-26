import { Browser, BrowserContext, chromium, Page } from "playwright";

export default class LoginPO {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.getByRole('button', { name: 'My account' }).click();
        await this.page.getByRole('link', { name: 'Login' }).click();
    }
}  