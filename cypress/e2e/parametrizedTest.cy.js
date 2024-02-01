
let testData = [{
    "testData": "Cypress", "expectedResult": "JavaScript"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}, {
    "testData": "webdriverio", "expectedResult": "Getting Started"
}]

// let testData = [ "Cypress", "webdriverio", "webdriverio"]

testData.forEach(testData => {
    it(`Perform search with text: ${testData}`, () => {

        cy.log('Open search page');
        cy.visit('https://google.com');

        cy.log('Enter search query');
        cy.get('textarea[type="search"]').type(`${testData}{enter}`);

        cy.log('Expected text should display on search results page');
        cy.get('h3', {timeout: 5000}).should('contain', testData);
    })
})



