describe("Calculator", () => {
  beforeEach(() => {
    // Navigate to the calculator application
    cy.visit("https://incredible-blancmange-d1cfd5.netlify.app/");
  });

  it("should perform addition correctly", () => {
    // Perform addition operation
    cy.get("#input").type("5");
    cy.get("#addition-button").click({ force: true });
    cy.get("#input").type("5");
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "10");
  });

  it("should perform subtraction correctly", () => {
    // Perform subtraction operation
    cy.get("#input").type("5");
    cy.get("#subtraction-button").click({ force: true });
    cy.get("#input").type("3");
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "2");
  });

  it("should perform division correctly", () => {
    // Perform division operation
    cy.get("#input").type("20");
    cy.get("#division-button").click({ force: true });
    cy.get("#input").type("10");
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "2");
  });

  it("should perform multiplication correctly", () => {
    // Perform multiplication operation
    cy.get("#input").type("5");
    cy.get("#multiplication-button").click({ force: true });
    cy.get("#input").type("7");
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "35");
  });

  it("should change positive number to negative and vice versa", () => {
    // Change positive number to negative
    cy.get("#input").type("5");
    cy.get("#negate-button").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "-5");

    // Change negative number to positive
    cy.get("#negate-button").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "5");
  });

  it("should clear number from display", () => {
    cy.get("#input").type("5");
    cy.get("#clear-button").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0");
  });

  it("should take percent from number", () => {
    cy.get("#input").type("5");
    cy.get("#percent").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0.05");
  });
});
