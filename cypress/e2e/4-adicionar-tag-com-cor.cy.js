describe('Adicionar tag com cor', () => {

  it('Deve adicionar uma tag com cor em uma tarefa', () => {

    cy.visit('/');
    cy.contains('Adicionar Tarefa').click();
    cy.get('div.custom-input form input').type('Teste tarefa Cypress');
    cy.get('.btn').click();
    cy.contains('Teste tarefa Cypress').click()
    cy.get('#1Color').click()
    cy.contains('Adicionar nova Tag').click()
    cy.get('div.custom-input form input').type('Tag 1')
    cy.get('.btn').click();

  });

});