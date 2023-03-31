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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.add('createaccount', () => { 
   cy.visit('http://blockchainmarketplace.quanrio.com/')
   cy.get('.signUpBtnTxt').click()
   cy.get('.p-0 > a').click()
   cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('shah')
   cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('jehan')
   cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('lk')
   cy.get(':nth-child(2) > :nth-child(2) > .form-control').type(`${Date.now()}@gmail.com`)
   cy.get(':nth-child(2) > :nth-child(2) > .form-control').invoke('val').then($q=>{
    var t= $q
    cy.log(t);
   })
   cy.get(':nth-child(3) > .form-control').type('abc')
   cy.get('.d-flex > .btn').click()
 })
