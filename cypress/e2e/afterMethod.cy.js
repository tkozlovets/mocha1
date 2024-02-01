beforeEach(() => {
    cy.log('Executed 1 time for all tests in all test suits');
})

describe("after method", () => {

    before(() => {
        cy.visit('https://example.cypress.io');
    })

    after(() => {
        cy.log('Executed 1 time after all tests')
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

describe("afterEach method", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    })

    afterEach(() => {
        cy.log('Executed each time after every test');
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