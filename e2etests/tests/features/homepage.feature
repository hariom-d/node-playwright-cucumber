Feature: sample homepage feature
  As a user
  I want to visit the homepage
  So that I can see the welcome message

  Scenario: Visit the homepage
    Given I login to the ecommerce website
    Then I should see "My Account" in the title
    When I navigate to the order history page
    When I navigate to the notifications page
    When I logout from the ecommerce website
    Then I should see "Your Store" in the title