describe('Drag And Drop', () => {

    const dataTransfer = new DataTransfer;
  
    before('Header check', () => {
      cy.visit('/drag_and_drop')
      cy.get('h3').contains('Drag and Drop')
  
    })
  
    
    it('Should Drag And Drop Boxes', () => {

        cy.get('#column-a').should('be.visible')
        cy.get('#column-a > header').then(($headerText)=> {
            const text = $headerText.text()
            cy.log(text)
            expect(text).to.not.eq('B')
        })

        cy.get('#column-a')
        .trigger('dragstart', { dataTransfer })

        cy.get('#column-b')
        .trigger('drop', { dataTransfer })

        cy.get('#column-a')
        .trigger('dragend').should('be.visible')

        cy.get('#column-a')
        .trigger('dragend').then(($headerTextA) =>{
            const textA = $headerTextA.text()
            cy.log(textA)
            expect(textA).to.eq('B')
        })
        
    })
  
  })
  