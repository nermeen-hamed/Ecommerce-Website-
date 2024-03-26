const { Given, When, Then,And }=require ('cypress-cucumber-preprocessor/steps');
const Home=require('../../PageObjects/Home')
const mobile=require('../../PageObjects/mobile')
const details=require('../../PageObjects/mobileDetailsScreen')
Given('User in the mobile screen',function(){
    cy.visit('/');
})
When('User clicks on the mobile menu',function(){
Home.clickOnMobileTab();
});
And('select an item from the list of all mobile',function(){
      mobile.selectMobileDevice();
      
});

Then('The price for the item from mobile screen equals to {string}',function(price){
  mobile.comparenPriceOfMobile(price)
});
And('The price for the same item from details screen equals to {string}',function(price){
    details.comparenPriceOfMobileFromDetailsScreen(price)
});