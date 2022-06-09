describe("homepage", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/search?&hasImages=true&q=Paintings&isHighlight=true", {fixture: "ids.json"})
    })

    it("should show the user a homepage with a header, nav bar and several thumnails", () => {
        cy.contains("Art Access")
    })
})