describe('Adicionar tag sem cor', () => {

  it('Deve adicionar uma tag sem cor em uma tarefa', () => {

    cy.visit('/');
    cy.contains('Adicionar Tarefa').click();
    cy.get('div.custom-input form input').type('Teste tarefa Cypress');
    cy.get('.btn').click();
    cy.contains('Teste tarefa Cypress').click()
    cy.contains('Adicionar nova Tag').click()
    cy.get('div.custom-input form input').type('Tag 1')
    cy.get('.btn').click();

  });
  
});