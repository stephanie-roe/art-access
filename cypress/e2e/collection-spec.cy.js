describe("collection - spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})
    cy.visit("http://localhost:3000/").wait(2000)     
  })

  it("should show the user all of the works that have been added to their collection", () => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.get(".thumbnail").first().click()

    cy.get(".add-to-collection-btn").click()
    cy.get(".collection-btn").click()
    cy.contains("Collection")
    cy.get(".collection-parent-container").children().should("have.length", 2)
    cy.get(".title").contains('Christ Carrying the Cross, called "The Lord of the Fall"')
    cy.get(".collection-card-image").should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/DP-18755-007.jpg")
  })

  // test for error handling here in case there is nothing in the collection 
})