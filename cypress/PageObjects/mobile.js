class mobile {
    dropdownElement='.category-products > :nth-child(1) > .sorter > .sort-by > select'
    //option="name"
    mobileSonyXperia='[title="Xperia"]'
    mobileSonyXperiaPrice='.price'
    items='.products-grid'
    addToCartButton='.product-info > .actions > .button'
    addToCompareButton='.link-compare'
    compareButton='[title="Compare"]'

    clickOnDropdownList(option){
        cy.get(this.dropdownElement).each(($elm)=>{
            if($elm===option){
                cy.wrap($elm).click()
            }
        });
    }
    itemSortedByName(){
        const list=[]
        cy.get(this.items).each(($elm)=>{
            list.push($elm.text())
        }).then(() => {
            const sorted = Cypress._.sortBy(list)
            expect(sorted).to.deep.equal(list)
          })

    }
    selectMobileDevice(){
        cy.get(this.mobileSonyXperia).click()
    }
      comparenPriceOfMobile(expectedPrice){
        cy.comparePrice(this.mobileSonyXperiaPrice,expectedPrice)
    }
    SelectMobiel(mobileName){
    cy.get(this.items).each(($elm,index)=>{
       cy.get($elm).contains(mobileName).then(()=>{
        cy.get(this.addToCartButton).eq(index).click();
       });
    })
    }


clickOnCompareButton(){
    cy.get(this.compareButton).click()
}
getCompareList(mobileName){
     
      const data = mobileName.raw();
      let i=0;
      for (const row of data){
        
        cy.get(this.items).each(($elm)=>{
            
            if(cy.wrap($elm.text()).should('contain',row.toString())){
                
                cy.get(this.addToCompareButton).eq(i).click();
                i=i+1; 
            }
            
                
            
           
        })  
         
      }
    }
}
module.exports =new mobile();

