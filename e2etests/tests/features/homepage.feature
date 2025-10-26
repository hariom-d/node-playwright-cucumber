Feature: sample homepage feature
  As a user
  I want to visit the ecommer website
  So that I can test the functionality

  Scenario: Visit the Order History page
    Given I login to the ecommerce website
    Then I should see "My Account" in the title
    When I navigate to the order history page
    When I logout from the ecommerce website
    Then I should see "Your Store" in the title

  Scenario: Visit the Notifications Page
    Given I login to the ecommerce website
    Then I should see "My Account" in the title
    When I navigate to the notifications page
    When I logout from the ecommerce website
    Then I should see "Your Store" in the title
