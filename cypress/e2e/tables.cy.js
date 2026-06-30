describe('Cypress Part I: Table Validation Suite', () => {

  beforeEach(() => {
    
    Cypress.on('uncaught:exception', () => false);
  });

  it('Validates table dimensions, column counts, row data, and interactive cells', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    cy.get('table[name="BookTable"] th').should('have.length', 4);

    cy.get('table[name="BookTable"] tbody tr').should('have.length.gt', 5);

    cy.get('table[name="BookTable"] tr').eq(1).within(() => {

      cy.get('td').eq(0).should('have.text', 'Learn Selenium');
      cy.get('td').eq(1).should('have.text', 'Amit');
    });

    cy.get('table[name="BookTable"]').should('contain.text', 'Master In Selenium');

cy.get('table[name="BookTable"]').contains('Animesh').should('be.visible');  });

});
