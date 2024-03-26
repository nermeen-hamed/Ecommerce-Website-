const { Given, When, Then,And }=require ('cypress-cucumber-preprocessor/steps');
const Home=require('../../PageObjects/Home')
const mobile=require('../../PageObjects/mobile')
Given('user in home screen', function () {
    cy.visit('/');
 
  });
  When('user click on mobile tab', function () {
    Home.clickOnMobileTab()
   
    });
  Then('user lands on mobile screen',function(){
    Home.getScreensTitle("Mobile")

  });
  And('user select sort by name from dropdown',function(){
    mobile.clickOnDropdownList("name");
 }) ;
 Then('all products should be sorted by name',function(){
    mobile.itemSortedByName()
 });
 