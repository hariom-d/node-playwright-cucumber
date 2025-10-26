import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import {expect} from "@playwright/test";

setDefaultTimeout(60 * 1000);
let browser: Browser;
let context: BrowserContext
let page: Page

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

Given("I login to the ecommerce website", async function () {
  
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole('button', { name: 'My account' }).click();
  await sleep(1000);
  await page.getByRole('link', { name: 'Login' }).click();
  await sleep(1000);
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log("Hari: I login to the ecommerce website");
});

When("I navigate to the order history page", async function () {
  
  await page.getByRole('link', { name: 'View your order history' }).click();

  console.log("Hari: I navigate to the order history page");
});

When("I navigate to the notifications page", async function () {
  
  await page.getByRole('link', { name: 'Notification' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();

  console.log("Hari: I navigate to the notifications page");
});

When("I logout from the ecommerce website", async function () {
  
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();

  console.log("Hari: I logout from the ecommerce website");
});

Then("I should see {string} in the title", async function (string) {
  const title = await page.title();
  expect(title).toBe(string);
  
  console.log("Hari: I should see ...", string);
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();

  console.log("Hari: After Hook executed");
});

async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}