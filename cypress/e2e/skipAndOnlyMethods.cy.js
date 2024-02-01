describe("Positive scenarios", () => {
    it('Positive scenario 1', () => {
        cy.visit('https://example.cypress.io')
    })

    it('Positive scenario 2', () => {
        cy.visit('https://example.cypress.io')
    })

    it('Positive scenario 3', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe.only("Negative scenarios", () => {
    it('Negative scenario 1', () => {
        cy.visit('https://example.cypress.io')
    })

    it.skip('Negative scenario 2', () => {
        cy.visit('https://example.cypress.io')
    })

    it('Negative scenario 3', () => {
        cy.visit('https://example.cypress.io')
    })
})
