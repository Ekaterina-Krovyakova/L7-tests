describe('infiniteScroll', () => {
    const header = 'h3'
    const page = '/infinite_scroll'

    beforeEach('Header check', () => {
      cy.visit(page)
      cy.get(header).contains('Infinite Scroll')
  
    })
    
    it('scroll for several seconds', () => {

        cy.get('.jscroll-inner').should('be.visible')
        cy.get('.jscroll-added').last().should('be.visible')
        cy.scrollTo('bottom', {duration: 5000})
         
    })

    it('scroll in a loop', () => {
        
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
  