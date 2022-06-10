
describe("featured spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})
    cy.visit("http://localhost:3000/").wait(2000)     
  })

  it ("should allow the user to click on a thumbnail and see a work's details", () => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.get(".thumbnail").first().click()
    cy.get(".featured-work").children().should("have.length", 2)
    cy.get(".title").contains('Christ Carrying the Cross, called "The Lord of the Fall"')
    cy.get(".featured-image").should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/DP-18755-007.jpg")
  })

  it("should allow the user to add a work to their collection", () => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.get(".thumbnail").first().click()

    cy.get(".add-to-collection-btn").click()
    cy.get(".collection-btn").click()
    cy.contains("Collection")
  })

  // might wanna stub the componentDidMount here, and incorporate error handling for if that fetch fails as well. 
})