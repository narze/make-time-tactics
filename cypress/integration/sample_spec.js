describe("Home", () => {
  it("visits home page", () => {
    cy.visit("https://make-time-tactics.vercel.app")

    cy.contains("Make Time Tactics")

    cy.contains("Random!").click()

    cy.contains("Highlight")
    cy.contains("Laser")
    cy.contains("Energize")
  })
})
