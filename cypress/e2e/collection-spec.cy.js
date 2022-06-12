describe("collection - spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})

    cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.visit("http://localhost:3000/",{timeout: 2000})
  })

  it("should show the user all of the works that have been added to their collection", () => {
    cy.get(".thumbnail", {timeout: 5000}).first().click()
    cy.get(".add-to-collection-btn").click()
    cy.get(".collection-btn").click()
    cy.contains("Collection")
    cy.get(".collection-parent-container").children().should("have.length", 2)
    cy.get(".title").contains('Christ Carrying the Cross, called "The Lord of the Fall"')
    cy.get(".collection-card-image").should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/DP-18755-007.jpg")
  })

  it("should display a message prompting the user to add to their collection if it is empty", () => {
    cy.get(".collection-btn").click()
    cy.contains("Collection")
    cy.contains("No items in your collection, return to home to add.")
  })

  it("should change the url to end in /my-collection when the user is viewing their collection", () => {
    cy.get(".collection-btn").click()
    cy.url().should("eq", "http://localhost:3000/my-collection")
  })
})