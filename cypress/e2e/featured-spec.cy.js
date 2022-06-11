
describe("featured spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})

    cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.visit("http://localhost:3000/", {timeout: 3000})     
  })

  it ("should allow the user to click on a thumbnail and see a work's details", () => {
    cy.get(".thumbnail").first().click()
    cy.get(".featured-work").children().should("have.length", 2)
    cy.get(".title").contains('Christ Carrying the Cross, called "The Lord of the Fall"')
    cy.get(".featured-image").should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/DP-18755-007.jpg")
  })

  it("should allow the user to add a work to their collection", () => {
    cy.get(".thumbnail").first().click()
    cy.get(".add-to-collection-btn").click()
    cy.get(".collection-btn").click()
    cy.contains("Collection")
  })

  it("should allow the user to return to the home page", () => {
    cy.get(".thumbnail").first().click()
    cy.get(".home-btn").click()
    cy.get(".works-container", {timeout: 3000}).children().should("have.length", 2)
  })

  it("should change the url to end with the id of the featured work", () => {
    cy.get(".thumbnail").first().click()
    cy.url().should("eq","http://localhost:3000/764095")
  })
})