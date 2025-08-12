describe('Testes no Kanban', () => {

  it('Deve carregar a página inicial e mostrar o título', () => {
    cy.visit('/');
    cy.contains('Quadro Kanban'); 

  });

});