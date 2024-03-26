Feature: Add products in the cart

Scenario: Verify that you cannot add more product in the cart than the product available in the store

Given User in the mobile screen
When  User clicks on the mobile menu
And   Add "Sony Xperia" into the cart
And  Change the quantity value to 1000
And  Click update button
Then An error message "Some of the products cannot be ordered in requested quantity." should be shown
When User clicks on remove button
Then User should see a message "You have no items in your shopping cart."

