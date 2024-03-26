Feature: copmare Products

Scenario: Verify that you are able to compare to Products

Given User in home Screen
And   Click on mobile menu
When  User clicks on add to compare button for both
|Samsung Galaxy|
|IPhone|
Then  User should see a new window with title "Compare Products" 
And   User should be able to close window 