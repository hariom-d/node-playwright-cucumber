import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { page } from "../../corelib/basePage.spec";
import LoginPO from "../pageObjects/loginPO";
import HomePO from "../pageObjects/homePO";

setDefaultTimeout(60 * 1000);

let loginPO: LoginPO;
let homePO: HomePO;

Given("I login to the ecommerce website", async function () {
  homePO = new HomePO(page);
  await homePO.navigateToHomePage();

  loginPO = new LoginPO(page);
  await loginPO.navigateToLoginPage();
  //Verify that we are on login page
  await page.locator('//a[contains(text(),"Address Book")]').waitFor({timeout: 1000});
  
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hari.dwivedi@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hari001');
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
  await expect(title).toBe(string);
  
  console.log("Hari: I should see ...", string);
});

async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}