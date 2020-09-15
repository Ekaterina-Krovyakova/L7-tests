describe('infiniteScroll', () => {
  
    it('Header check', () => {
      cy.visit('/infinite_scroll')
      cy.get('h3').contains('Infinite Scroll')
  
    })
  
    
    it('scroll for several seconds', () => {

        //cy.get('.scroll.large-8.columns.large-centered').should('be.visible')
        cy.get('.jscroll-inner').should('be.visible')
        cy.get('.jscroll-added').last().should('be.visible')
        cy.scrollTo('bottom', {duration: 5000})
         
    })

    

    it('scroll in a loop', () => {
        
        cy.visit('/infinite_scroll')
        cy.get('div.jscroll-next-parent').last().children()
        .invoke('attr', 'href').then(($hrefAttr) =>{

            cy.wrap($hrefAttr).should('include', 'infinite')

            var res = 10
                for (let i = 0; i < res; i++){
                    cy.scrollTo('bottom', {duration: 3000}) 
                }
        })
    })


     })
  