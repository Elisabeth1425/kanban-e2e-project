describe('Criar tarefa', () => {

  it('Deve adicionar uma nova tarefa', () => {

    cy.visit('/');
    cy.contains('Adicionar Tarefa').click();
    cy.get('div.custom-input form input').type('Teste tarefa Cypress');
    cy.get('.btn').click();

  });
  
});