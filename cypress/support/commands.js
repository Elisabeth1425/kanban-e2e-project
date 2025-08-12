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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('reactDndDragAndDrop', (sourceSelector, targetSelector) => {
  cy.get(sourceSelector, { timeout: 10000 }).should('exist').then($source => {
    const dataTransfer = new DataTransfer();

    cy.wrap($source)
      .trigger('dragstart', { dataTransfer, force: true });

    cy.get(targetSelector, { timeout: 10000 }).should('exist')
      .trigger('dragenter', { dataTransfer, force: true })
      .trigger('dragover', { dataTransfer, force: true })
      .trigger('drop', { dataTransfer, force: true });

    cy.wrap($source)
      .trigger('dragend', { dataTransfer, force: true });
  });
});

