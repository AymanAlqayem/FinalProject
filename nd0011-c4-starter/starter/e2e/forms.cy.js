describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("nav.primary_nav_bar ul li#cardSetPage").click();
    cy.url().should("include", "/cardSetPage");
  });

  describe("Create Set Form", () => {
    it("should submit successfully with valid input", () => {
      cy.get('form#set-create input[name="set-name"]').type("Test Set");
      cy.get('form#set-create button[type="submit"]').click();
      cy.get(".success-message").should("be.visible");
    });

    it("should show error with empty input", () => {
      cy.get('form#set-create button[type="submit"]').click();
      cy.get(".error-message").should("contain", "Set name cannot be empty");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.get('form#set-create input[name="set-name"]').type("Test Set");
      cy.get('form#set-create button[type="submit"]').click();
    });

    it("should submit successfully with valid input", () => {
      cy.get('form#add-card input[name="question"]').type("What is 2+2?");
      cy.get('form#add-card input[name="answer"]').type("4");
      cy.get('form#add-card button[type="submit"]').click();
      cy.get(".success-message").should("be.visible");
    });

    it("should show error with empty input", () => {
      cy.get('form#add-card button[type="submit"]').click();
      cy.get(".error-message").should("contain", "Fields cannot be empty");
    });
  });
});
