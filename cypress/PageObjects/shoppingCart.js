class shoppingCart{
updateButton='.product-cart-actions > .btn-update'
inputQulty='.product-cart-actions >.input-text'
errorMessage='.error-msg > ul > li'
removeButton='td.a-center > a:nth-child(1)'
EmptyErrorMessage='.cart-empty'   
changeQualityValue(quality){
cy.get(this.inputQulty).clear().type(quality);  
}
enterUpdate(){
cy.get(this.updateButton).click()
}

   validateErrorMessg(errorMessg){
   cy.get(this.errorMessage).contains(errorMessg).should('exist')
}

clickOnRemoveButton(){
    cy.get(this.removeButton).click()
}
validateShoppingCartIsEmpty(messg){
    cy.get(this.EmptyErrorMessage).contains(messg).should('exist')
}
}
module.exports=new shoppingCart();