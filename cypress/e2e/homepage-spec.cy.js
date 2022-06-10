describe("homepage", () => {
  beforeEach(() => {
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture : "ids"})

     

      cy.visit("http://localhost:3000/").wait(2000)      
  })

  it("should show the user a homepage with a header, nav bar and several thumnails", () => {
      cy.contains("Art Access")

      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2"} )
      cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

      cy.get(".works-container").children().should("have.length", 3)
      cy.get(".thumbnail").last().should("have.attr", "src")


      cy.get(".nav-bar").children().should("have.length", 2)
      cy.get(".search-bar").should("have.attr", "placeholder").should("include", "search")
  })

//   it("should communicate to the user if there has been a server error", () => {
//   })

  it("should return a refined search to the user according to their query", () => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764095", {fixture: "work1"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/764091", {fixture: "work2"} )
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/768547", {fixture: "work3"} )

    cy.get(".search-bar").type("Charles")
    cy.get(".works-container").children().should("have.length", 1)
  })

//   it("should commumicate to the user if their search has returned no results", () => {
//   })
})