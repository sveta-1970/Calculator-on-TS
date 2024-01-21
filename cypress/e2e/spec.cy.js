describe("Calculator", () => {
  beforeEach(() => {
    // Navigate to the calculator application
    cy.visit("https://incredible-blancmange-d1cfd5.netlify.app/");
  });

  it("should perform addition correctly", () => {
    // Perform addition operation
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#addition-button").click({ force: true });
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "10");
  });

  it("should perform subtraction correctly", () => {
    // Perform subtraction operation
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#subtraction-button").click({ force: true });
    cy.get("#inputValue").type("3", { force: true });
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "2");
  });

  it("should perform division correctly", () => {
    // Perform division operation
    cy.get("#inputValue").type("20", { force: true });
    cy.get("#division-button").click({ force: true });
    cy.get("#inputValue").type("10", { force: true });
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "2");
  });

  it("should perform multiplication correctly", () => {
    // Perform multiplication operation
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#multiplication-button").click({ force: true });
    cy.get("#inputValue").type("7", { force: true });
    cy.get("#eq").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "35");
  });

  it("should change positive number to negative and vice versa", () => {
    // Change positive number to negative
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#negate-button").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "-5");

    // Change negative number to positive
    cy.get("#negate-button").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "5");
  });

  it("should clear number from display", () => {
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#clear-button").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "0");
  });

  it("should take percent from number", () => {
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#percent").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "0.05");
  });

  it("should place number from display to memory, show 0 in display and flag m at the left top", () => {
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#memoryIn").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "0");
    cy.get("#memoryFlag").should("have.text", "m");
  });

  it("should minus number in display from number in memory and update display and memory", () => {
    // Set initial value in memory
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#memoryIn").click({ force: true });

    // Enter another number in display and click "M-" button 
    cy.get("#inputValue").type("3", { force: true });
    cy.get("#memoryOut").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "0"); // Display should show "0"
    cy.get("#memoryFlag").should("have.text", "m"); // Memory flag should remain "m"
  });

  it("should add number in display to number in memory and should show number from memory in display", () => {
    // Set initial value in memory
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#memoryIn").click({ force: true });

    // Add another value to the value in memory
    cy.get("#inputValue").type("2", { force: true });
    cy.get("#memoryIn").click({ force: true });

    //Click "MRC" button one time
    cy.get("#clear-memory").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "7"); // Display should show "5"
    cy.get("#memoryFlag").should("have.text", ""); // Memory flag should show ""
  });

  it("should clear memory", () => {
    // Set initial value in memory
    cy.get("#inputValue").type("5", { force: true });
    cy.get("#memoryIn").click({ force: true });

    //Click "MRC" button one time
    cy.get("#clear-memory").click({ force: true });

    //Click "MRC" button second time
    cy.get("#clear-memory").click({ force: true });

    // Verify the result
    cy.get("#inputValue").should("have.value", "0"); // Display should show "5"
    cy.get("#memoryFlag").should("have.text", ""); // Memory flag should show ""
  })
});
