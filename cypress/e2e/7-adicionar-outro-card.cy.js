describe('Adicionar outro Card', () => {

  it('Deve adicionar outro card', () => {

    cy.visit('/');
    cy.contains('Adicionar outra lista').click()
    cy.get('div.custom-input form input').type('Card novo')
    cy.get('.btn').click();

  });
  
});