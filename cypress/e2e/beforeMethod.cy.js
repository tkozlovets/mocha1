describe("before method", () => {

    before(() => {
        cy.visit('https://example.cypress.io');
    })

    it('Positive scenario 1', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 2 - should fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 3 - should fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})

describe("beforeEach method", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    })

    it('Positive scenario 1', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 2', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 3', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})