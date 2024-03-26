const { Before,Given, When, Then,And }=require ('cypress-cucumber-preprocessor/steps');
const Home=require('../../PageObjects/Home')
const mobile=require('../../PageObjects/mobile')
const  shoppingCart=require('../../PageObjects/shoppingCart')
const {assertThat,is}=require('hamjest')
Given('User in the mobile screen', function () { 
    cy.visit('/');
  });
  When('User clicks on the mobile menu', function () {
    Home.clickOnMobileTab()
   
    });
  And('Add {string} into the cart',function(mobileName){
     mobile.SelectMobiel(mobileName);
  });
  And('Change the quantity value to {int}',function(quantity){
    shoppingCart.changeQualityValue(quantity);
 }) ;
 And('Click update button',function(){
    shoppingCart.enterUpdate();
 }) ;
 Then('An error message {string} should be shown',function(validationError){
        shoppingCart.validateErrorMessg(validationError)
     
 });

 When('User clicks on remove button',function(){
    shoppingCart.clickOnRemoveButton();
 });
 Then('User should see a message {string}',function(Messg){
  shoppingCart.validateShoppingCartIsEmpty(Messg)
 });


 