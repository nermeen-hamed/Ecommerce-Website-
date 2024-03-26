Feature: verify mobile price

Scenario: Verify that cost of product in list page and details page are equal

Given User in the mobile screen
When  User clicks on the mobile menu
And   select an item from the list of all mobile
Then  The price for the item from mobile screen equals to "$100.00" 
And   The price for the same item from details screen equals to "$100.00" 

