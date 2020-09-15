describe('iframe', () => {
  
    before('Header check', () => {
        cy.visit('/iframe')
        cy.get('h3').contains('An iFrame containing the TinyMCE WYSIWYG Editor')
    
      })
  
    
    it('iframe - type in body', () => {

        cy.get('#mce_0_ifr').then(($iframe)=>{
        
            const iframeContent = $iframe.contents().find('body')

            cy.wrap(iframeContent)
            .clear()
            .type('simple text')

        })

    })


    

    it('iframe - type in body from fixture file', () => {

        cy.fixture('example.json').then((data)=> {
            cy.wrap(data.bodyText).as('dataSource')
            })
        cy.get('@dataSource').then(dataSource => {
            
            cy.get('#mce_0_ifr').then(($iframe)=>{
        
                const iframeContent = $iframe.contents().find('body')

                cy.wrap(iframeContent)
                .clear()
                .type(dataSource)

                })

            })

    })

})