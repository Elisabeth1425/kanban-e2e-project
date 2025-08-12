describe('Trocar nome da Tarefa', () => {

  it('Deve trocar o nome da tarefa', () => {

    cy.visit('/');
    cy.contains('Banners da home').click()
    cy.contains('Banners da home').click()
    cy.get('div.custom-input form input').type('Banner da Sala')
    cy.get('.btn').click();

  });
  
});