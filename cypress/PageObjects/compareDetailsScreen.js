class compareDetailsScreen {
    actualMobile1='[title="Sony Xperia"]'
    actualMobile2='[title="IPhone"]'
    screenTitle='.page-title'
   
    compareMobiles(expectedMobile1){
        if(cy.get(this.actualMobile1).text()===expectedMobile1){
          return true
        }
        return false
    } 
       
    compareTitles(title){
    cy.get(this.screenTitle).should("contains",title)
    }
    closeScreen(){
    cy.close();
    }
}
module.exports=new compareDetailsScreen();