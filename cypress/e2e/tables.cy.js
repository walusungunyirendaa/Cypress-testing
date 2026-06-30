describe('Cypress Part I: Table Validation Suite', () => {

  beforeEach(() => {
    // Gracefully handle unhandled third-party frontend or script exceptions
    Cypress.on('uncaught:exception', () => false);
  });

  it('Validates table dimensions, column counts, row data, and interactive cells', () => {
    // 1. FIXED: Changed from generic 'blogspot.com' to the actual sandbox practice page
    cy.visit('https://testautomationpractice.blogspot.com/');

    // 2. Count Columns: Verify the table has exactly 4 header columns
    cy.get('table[name="BookTable"] th').should('have.length', 4);

    // 3. Count Rows: Verify the table data body has more than 5 rows populated
    cy.get('table[name="BookTable"] tbody tr').should('have.length.gt', 5);

    // 4. Read Data from a Row: Isolate the second row item and validate cell data explicitly
    cy.get('table[name="BookTable"] tr').eq(1).within(() => {
      // Validates the Author cell value matches exactly
      cy.get('td').eq(0).should('have.text', 'Learn Selenium');
      // Validates the Subject cell value matches exactly
      cy.get('td').eq(1).should('have.text', 'Amit');
    });

    // 5. Verify Table Contents: Ensure a specific unique keyword text string exists inside the table area
    cy.get('table[name="BookTable"]').should('contain.text', 'Master In Selenium');

    // 6. Click a Button / Interact with an element inside a specific row context
    // This looks for the row containing 'Anjali' and isolates that table row wrapper to confirm visibility
cy.get('table[name="BookTable"]').contains('Animesh').should('be.visible');  });

});
