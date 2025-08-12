describe('Excluir tarefa', () => {

  it('Deve excluir alguma tarefa', () => {

    cy.visit('/');
    cy.contains('UX Review').parent().find('svg.trash').click({ force: true });

  });

});