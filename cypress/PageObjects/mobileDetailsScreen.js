class mobileDetailsScreen{
    priceFromDetailsScreen='.price'

    comparenPriceOfMobileFromDetailsScreen(expectedPrice){
      cy.comparePrice(this.priceFromDetailsScreen,expectedPrice)        
    }
}module.exports =new mobileDetailsScreen();