Feature: Sort by name


Scenario:verify that user can sort by name
   Given user in home screen
   When user click on mobile tab
   Then user lands on mobile screen
   And  user select sort by name from dropdown 
   Then all products should be sorted by name
