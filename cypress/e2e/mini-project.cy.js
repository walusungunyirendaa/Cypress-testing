describe('Mini Project UI Automation Suite', () => {

  it('should successfully interact with all required form controls and elements', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('testautomationpractice.blogspot.com', { timeout: 30000 });

    cy.get('#name').type('Walusungu Nyirenda').should('have.value', 'Walusungu Nyire');
    cy.get('#email').type('walunyirenda@example.com').should('have.value','walunyirenda@example.com');
    cy.get('#phone').type('0770000688').should('have.value', '0770000688');
    cy.get('#textarea').type('Lusaka, Zambia').should('contain.value', 'Zambia');

    cy.get('#country').select('United Kingdom').should('have.value', 'uk');

    cy.get('#monday').check().should('be.checked');
    cy.get('#sunday').check().should('be.checked');
    cy.get('#monday').uncheck().should('not.be.checked');

    cy.get('#female').check().should('be.checked');
    cy.get('#male').should('not.be.checked');

    cy.get('#singleFileInput').selectFile({
      contents: Cypress.Buffer.from('Mock file content for assignment submission'),
      fileName: 'assignment-document.pdf',
      mimeType: 'application/pdf'
    });

    cy.get('footer').scrollIntoView().should('be.visible');

    cy.get('.title').first().should('exist').and('contain.text', 'Automation Testing Practice');
  });

});