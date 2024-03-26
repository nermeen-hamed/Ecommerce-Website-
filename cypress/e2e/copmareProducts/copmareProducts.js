const { Before,Given, When, Then,And }=require ('cypress-cucumber-preprocessor/steps');
const Home=require('../../PageObjects/Home')
const mobile=require('../../PageObjects/mobile')
const  compareDetails=require('../../PageObjects/compareDetailsScreen')
const {assertThat,is}=require('hamjest')
Given('User in home Screen', function () { 
    cy.visit('/');
  });
And ('Click on mobile menu',function(){
    Home.clickOnMobileTab();
})
  When('User clicks on add to compare button for both', function (mobileNAME) {
    mobile.getCompareList(mobileNAME);
    cy.wait(3000)
    mobile.clickOnCompareButton();
    });
 Then('User should see a new window with title {string}',function(title){
    
    compareDetails.compareTitles(title);    
 });

 And('User should be able to close window',function(){
    compareDetails.closeScreen()
 });

 