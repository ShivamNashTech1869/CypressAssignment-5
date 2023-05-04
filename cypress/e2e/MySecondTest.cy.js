describe('Search Smartwatches on Flipkart', () => {
    it('Searches and Displays Results', () => {
      // Visit the Flipkart website
      cy.visit('https://www.flipkart.com' , { timeout: 500000 })
      // Enter the search query
      cy.get('input[name="q"]')
        .type('smartwatches')
        .should('have.value', 'smartwatches')
  
      // Click the search button
      cy.get('button[type="submit"]')
        .click()
  
      // Assert that search results are displayed
      cy.get('div._1YokD2._3Mn1Gg')
        .should('be.visible')
    })
  })