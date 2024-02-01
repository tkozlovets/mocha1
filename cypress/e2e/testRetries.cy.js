describe.only("Test retries for specific test", () => {

    before(() => {
        cy.visit('https://example.cypress.io');
    })

    it('Positive scenario 1', {retries: 2}, () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 2 - should fail', () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })

    it('Positive scenario 3 - should fail', {retries: 3}, () => {
        cy.get('.banner').should('contain', 'Kitchen Sink');
    })
})


describe("Test retries for test suite", {retries: 2}, () => {

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
