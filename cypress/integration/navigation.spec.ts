describe("Navigating to France", () => {
  it("cy.visit navigates to the correct url", () => {
    cy.log(`${Cypress.config().baseUrl}`);
    cy.visit("/france");
    cy.url().should("contain", "cheese/france");
  });
});
