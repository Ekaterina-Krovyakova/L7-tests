describe('Drag And Drop', () => {

    const dataTransfer = new DataTransfer;
    const source = '#column-a'
    const target = '#column-b'
    const header = 'h3'
  
    beforeEach('Header check', () => {
      cy.visitDragNDrop()
      cy.get(header).contains('Drag and Drop')
  
    })
  
    it('Should Drag And Drop Boxes from custom commands', () => {

        cy.dragAndDropElement(source, target)

    })
    
    it('Should Drag And Drop Boxes', () => {

        cy.get(source).should('be.visible')
        cy.get(source).then(($headerText)=> {
            const text = $headerText.text()
            expect(text).to.eq(text)

        })

        cy.get(source)
        .trigger('dragstart', { dataTransfer })

        cy.get(target)
        .trigger('drop', { dataTransfer })

        cy.get(source)
        .trigger('dragend').should('be.visible')

        cy.get(source)
        .trigger('dragend').then(($headerTextA) =>{
            const textA = $headerTextA.text()
            expect(textA).to.eq(textA)
        })
        
    })
  
  })
  