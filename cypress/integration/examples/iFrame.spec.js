describe('iframe', () =>{
  
    const header = 'h3'
    const iframeId = '#mce_0_ifr'
    const page = '/iframe'

    beforeEach('Header check', function (){
        cy.visit(page)
        cy.get(header).contains('An iFrame containing the TinyMCE WYSIWYG Editor')
        cy.fixture('example')
        .then((data) => {
            this.data = data
        })
    
      })
  
    it('iframe - type in body', function () {

        cy.get(iframeId).then(($iframe)=>{
        
            const iframeContent = $iframe.contents().find('body')

            cy.wrap(iframeContent)
            .clear()
            .type('simple text')

        })

    })

    it('iframe - type in body from fixture file', function () {

        cy.fixture('example.json').then((data)=> {
            cy.wrap(data.bodyText).as('dataSource')
            })
        cy.get('@dataSource').then(dataSource => {
            
            cy.get(iframeId).then(($iframe)=>{
        
                const iframeContent = $iframe.contents().find('body')

                cy.wrap(iframeContent)
                .clear()
                .type(dataSource)

                })
            })
    })

    it('iframe - type in simple manner with fixture', function () {
        
            cy.get(iframeId).then( function($iframe) {
        
                const iframeContent = $iframe.contents().find('body')

                cy.wrap(iframeContent)
                .clear()
                .type(this.data.bodyText)

                })

    })

})