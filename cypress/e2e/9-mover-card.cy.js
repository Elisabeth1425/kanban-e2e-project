describe('Mover tarefa no Kanban', () => {

  it('Deve mover "Documentar padrões mobile" para Done', () => {
    cy.visit('/');

    const cardOrigem = '[draggable="true"]:contains("Documentar padrões mobile")';
    const colunaDone = '.sc-iBkjds.iLVyJp:has(h1:contains("Done")) .board-cards';

    cy.reactDndDragAndDrop(cardOrigem, colunaDone);

    cy.get(colunaDone)
      .should('contain.text', 'Documentar padrões mobile');
  });
});
