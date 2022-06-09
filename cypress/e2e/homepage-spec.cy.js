// describe("homepage", () => {
//   beforeEach(() => {
//       cy.visit("http://localhost:3000/")
//       cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {"objectIDs":  ["764095", "764091", "768547"]})
//   })

//   it("should show the user a homepage with a header, nav bar and several thumnails", () => {
//       cy.contains("Art Access")
//       cy.get(".works-container").children().should("have.length", 3)
//   })
// })