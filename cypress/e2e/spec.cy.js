describe("Calculator", () => {
  beforeEach(() => {
    // Navigate to the calculator application
    cy.visit("https://incredible-blancmange-d1cfd5.netlify.app/");
  });

  it("should perform addition correctly", () => {
    // Perform addition operation
    cy.get("#addition-button").click();
    cy.get("#input").type("5");
    cy.get("#eq").click();

    // Verify the result
    cy.get("#input").should("have.value", "5");
  });

  it("should perform subtraction correctly", () => {
    // Perform subtraction operation
    cy.get("#subtraction-button").click();
    cy.get("#input").type("3");
    cy.get("#eq").click();

    // Verify the result
    cy.get("#input").should("have.value", "-3");
  });

  it("should perform division correctly", () => {
    // Perform division operation
    cy.get("#division-button").click();
    cy.get("#input").type("10");
    cy.get("#eq").click();

    // Verify the result
    cy.get("#input").should("have.value", "0");
  });

  it("should perform multiplication correctly", () => {
    // Perform multiplication operation
    cy.get("#multiplication-button").click();
    cy.get("#input").type("7");
    cy.get("#eq").click();

    // Verify the result
    cy.get("#input").should("have.value", "0");
  });

  it("should change positive number to negative and vice versa", () => {
    // Change positive number to negative
    cy.get("#input").type("5");
    cy.get("#negate-button").click();

    // Verify the result
    cy.get("#input").should("have.value", "-5");

    // Change negative number to positive
    cy.get("#negate-button").click();

    // Verify the result
    cy.get("#input").should("have.value", "5");
  });

  it("should clear number from display", () => {
    cy.get("#input").type("5");
    cy.get("#clear-button").click();

    // Verify the result
    cy.get("#input").should("have.value", "0");
  });

  it("should take percent from number", () => {
    cy.get("#input").type("5");
    cy.get("#percent").click();

    // Verify the result
    cy.get("#input").should("have.value", "0.05");
  });
});
