describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it('clicking on "Card Sets" navigates to the card set page', () => {
    cy.get("nav.primary_nav_bar ul li#cardSetPage").click();
    cy.url().should("include", "/cardSetPage");
  });

  it('clicking on "About" navigates to the About page', () => {
    cy.get("nav.primary_nav_bar ul li#aboutPage").click();
    cy.url().should("include", "/aboutPage");
  });

  it('clicking on "Home" navigates to the Home page', () => {
    cy.get("nav.primary_nav_bar ul li#homePage").click();
    cy.url().should("include", "/homePage");
  });
});
