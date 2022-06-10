describe("homepage", () => {
  beforeEach(() => {
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids.json"})
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1.json"} )
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2.json"} )
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3.json"} )
      cy.visit("http://localhost:3000/")
      cy.wait(2000)
  })

  it("should show the user a homepage with a header, nav bar and several thumnails", () => {
      cy.contains("Art Access")
      cy.get(".works-container").children().should("have.length", 2)
  })
})