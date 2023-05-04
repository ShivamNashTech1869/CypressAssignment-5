describe('Validate Mantra.com', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })
      // Visit the Mantra website
      cy.visit('https://www.myntra.com/',
      { headers: { "Accept-Encoding": "gzip, deflate" } },
      {continueAfter: 5000})
    })

    let searchProduct = 'T-Shirt'

    it('Search a product and add to cart', () => {
    
      const searchBox = cy.get('input[class="desktop-searchBar"]')
      const search = cy.get('a[class="desktop-submit"]')

      // Enter the search query and click on search
        searchBox
          .type(searchProduct)
          .should('have.value', searchProduct)
    
        search.click()
    
        // Select first product
        cy.get('li[class="product-base"]')
        .find('a')
        .invoke('removeAttr', 'target')
        .eq(0).click()

        //Select first size for the shirt
        cy.get('div[class="size-buttons-buttonContainer"]')
        .eq(0)
        .click()

        //Add to the bag 
        cy.get('div[class*="pdp-add-to-bag pdp-button"]')
        .should('have.text', 'ADD TO BAG')
        .click()

        //Click on Go to bage button
        cy.get('a[class*="pdp-goToCart pdp-add-to-bag"]')
        .should('have.text', 'GO TO BAG')
        .click()

        //Click on  place order button
        cy.get('button[class="css-etguer"]')
        .click({force:true})
        

      })

})   //div[class="product-imageSliderContainer"]
