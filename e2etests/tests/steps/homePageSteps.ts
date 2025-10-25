import { Given, Then } from "@cucumber/cucumber";

Given("I am on the homepage", async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Hari: I am on the homepage");
  
});

Then("I should see {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("Hari: I should see ...", string);
  
});
