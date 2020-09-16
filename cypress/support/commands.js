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

import Drag from '../support/pageObjects/gradAndDrop.js'
const dataTransfer = new DataTransfer;

Cypress.Commands.add("dragAndDropElement", () => {
    const dragNdrop = new Drag()
    
    cy.visit('/drag_and_drop')
    dragNdrop.getA().should('be.visible')
    dragNdrop.getA().then(($headerText)=> {
        const text = $headerText.text()
        cy.log(text)
        expect(text).to.not.eq('B')
        expect(text).to.eq('A')

    })

    dragNdrop.getA()
    .trigger('dragstart', { dataTransfer })

    dragNdrop.getB()
    .trigger('drop', { dataTransfer })

    dragNdrop.getA()
    .trigger('dragend').should('be.visible')

    dragNdrop.getA()
    .trigger('dragend').then(($headerTextA) =>{
        const textA = $headerTextA.text()
        cy.log(textA)
        expect(textA).to.eq('B')
        expect(textA).to.not.eq('A')
    })
    
})
