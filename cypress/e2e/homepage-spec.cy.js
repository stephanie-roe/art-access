describe("homepage", () => {
  beforeEach(() => {
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})

     cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
      cy.intercept("https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

      cy.visit("http://localhost:3000/", {timeout: 2000})     
  })

  it("should show the user a homepage with a header, nav bar and several thumnails", () => {
      cy.contains("Art Access")

      cy.get(".works-container", {timeout: 2000}).children().should("have.length", 2)
      cy.get(".thumbnail").last().should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/AW.Weir.DebraForce.2017.jpg")


      cy.get(".nav-bar").children().should("have.length", 2)
      cy.get(".search-bar").should("have.attr", "placeholder").should("include", "search")
  })

  it("should communicate to the user if the page they are navigating to doesn't exist", () => {
    cy.visit("http://localhost:3000/badURL")
    cy.contains("Apologies, that page doesn't exist. Return home and try again.")
  })

  it("should communicate to the user if there is an error with the server", () => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {statusCode: 500, message: "Server Error"})
    cy.visit("http://localhost:3000/")
    cy.contains("Oh no!")
  })

  it("should return a refined search to the user according to their query", () => {
    cy.get(".search-bar").type("Charles")
    cy.get(".thumbnail").first().should("have.attr", "src").should("include", "https://images.metmuseum.org/CRDImages/ad/original/AW.Weir.DebraForce.2017.jpg")
  })

  it("should commumicate to the user if their search has returned no results", () => {
    cy.get(".search-bar").type("csd;khfaas")
    cy.contains("No results, please try again.")
  })

  it("should have a specific url for the homepage", () => {
    cy.url().should("eq", "http://localhost:3000/")
  })
})