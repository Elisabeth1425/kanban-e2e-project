describe('Mudar o tema', () => {

  it('Deve alternar o tema claro/escuro', () => {

    cy.visit('/')
    cy.get('input[type="checkbox"]').click({ force: true });
    
    cy.get('input[type="checkbox"]').click({ force: true });

  });
  
});