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

  it("should place number from display to memory, show 0 in display and flag m at the left top", () => {
    cy.get("#input").type("5");
    cy.get("#memoryIn").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0");
    cy.get("#memoryFlag").should("have.value", "m");
  });

  it("should add number in display to number in memory and update display and memory", () => {
    // Set initial value in memory
    cy.get("#input").type("5");
    cy.get("#memoryIn").click({ force: true });

    // Enter another number in display and click memory button again
    cy.get("#input").type("7");
    cy.get("#memoryIn").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0"); // Display should show "0"
    cy.get("#memoryFlag").should("have.text", "m"); // Memory flag should remain "m"
    cy.get("#memoryIn").should("have.value", "12"); // Memory should contain 12 (5 + 7)
  });

  it("should minus number in display from number in memory and update display and memory", () => {
    // Set initial value in memory
    cy.get("#input").type("5");
    cy.get("#memoryIn").click({ force: true });

    // Enter another number in display and click "M-" button 
    cy.get("#input").type("3");
    cy.get("#memoryOut").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0"); // Display should show "0"
    cy.get("#memoryFlag").should("have.text", "m"); // Memory flag should remain "m"
    cy.get("#memoryIn").should("have.value", "2"); // Memory should contain 2 (5 - 3)
  });

  it("should show number from memory in display", () => {
    // Set initial value in memory
    cy.get("#input").type("5");
    cy.get("#memoryIn").click({ force: true });

    //Click "MRC" button one time
    cy.get("#clear-memory").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "5"); // Display should show "5"
    cy.get("#memoryFlag").should("have.text", ""); // Memory flag should show ""
  })

  it("should clear memory", () => {
    // Set initial value in memory
    cy.get("#input").type("5");
    cy.get("#memoryIn").click({ force: true });

    //Click "MRC" button one time
    cy.get("#clear-memory").click({ force: true });

    //Click "MRC" button second time
    cy.get("#clear-memory").click({ force: true });

    // Verify the result
    cy.get("#input").should("have.value", "0"); // Display should show "5"
    cy.get("#memoryFlag").should("have.text", ""); // Memory flag should show ""
  })
});
