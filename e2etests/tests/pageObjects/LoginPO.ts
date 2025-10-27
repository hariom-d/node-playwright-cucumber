import { Browser, BrowserContext, chromium, Page } from "playwright";
import BasePO from "./BasePO";

export default class LoginPO extends BasePO {
    page: Page;
    constructor(page: Page) {
        super(page)
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.clickButtonWithName('My account');
        // await this.page.getByRole('link', { name: 'Login' }).click();
        await this.clickLinkWithName('Login');
    }
}  