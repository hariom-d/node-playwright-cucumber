import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import {expect} from "@playwright/test";

setDefaultTimeout(60 * 1000);
let browser: Browser;
let context: BrowserContext;
let page: Page;


Before(async function () {
  browser = await chromium.launch({
    headless: false,
    channel: "chrome",
    args: ["--start-maximized"],
  });
  context = await browser.newContext({viewport: null, javaScriptEnabled: true});
  page = await context.newPage();
  console.log("Hari: Before Hook executed");
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();

  console.log("Hari: After Hook executed");
});

export { page };