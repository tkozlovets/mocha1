
const searchTest = (inputData) => {
    return ()=>{
        cy.visit('https://google.com');
        cy.get('textarea[type="search"]').type(`${inputData.testData}{enter}`);
        cy.get('h3', {timeout: 5000}).should('contain', inputData.expectedResult);
    }
}

it(`Perform search with text: Cypress`, searchTest({"testData": "Cypress", "expectedResult": "JavaScript"}));

it(`Perform search with text: webdriverio`, searchTest({"testData": "webdriverio", "expectedResult": "Getting Started"}));
