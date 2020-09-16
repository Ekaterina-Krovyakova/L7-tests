// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const dataTransfer = new DataTransfer;

Cypress.Commands.add("visitDragNDrop", () => {
    
    cy.visit('/drag_and_drop')

})

Cypress.Commands.add("getSource", (element) => {

    return cy.get(element)
})

Cypress.Commands.add("getTarget", (element) => {

    return cy.get(element)
})

Cypress.Commands.add("getHeader", (element) => {

    return cy.get(element)
})


Cypress.Commands.add("assertDtragNDrop", (source) => {

    cy.get(source).then(($headerText)=> {
        const text = $headerText.text()
        expect(text).to.eq(text)
    })
})

Cypress.Commands.add("dragAndDropElement", (sourceSelector, targetSelector) => {
    
    
    cy.getSource(sourceSelector).should('be.visible')

    cy.assertDtragNDrop(sourceSelector)

    cy.getSource(sourceSelector)
    .trigger('dragstart', { dataTransfer })

    cy.getTarget(targetSelector)
    .trigger('drop', { dataTransfer })

    cy.getSource(sourceSelector)
    .trigger('dragend').should('be.visible')

    cy.assertDtragNDrop(sourceSelector)
    
})
