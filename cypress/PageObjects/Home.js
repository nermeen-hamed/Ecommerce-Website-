class Home{
    mobileTab='[class="level0 nav-1 first"]'
    clickOnMobileTab(){
        cy.get(this.mobileTab).click()
    }
    getScreensTitle(title){
          return cy.title().should('eq', title)
    }
   
}
module.exports =new Home();