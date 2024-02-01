let testData = [{
    fieldSelector: '#AccountFrm_firstname',
    inputValue: "First Name",
    errorText: "First Name must be between 1 and 32 characters!"
},{
    fieldSelector: '#AccountFrm_lastname',
    inputValue: "Last Name",
    errorText: "Last Name must be between 1 and 32 characters!"
}]

testData.forEach(testData => {
    it(`Field ${testData.fieldSelector} is required`, () => {

        cy.visit('https://automationteststore.com/index.php?rt=account/create');

        cy.get(testData.fieldSelector).type(`${testData.inputValue}`);
        cy.get('[title="Continue"]').click();
        cy.get(testData.fieldSelector).parent('div').siblings('span').should('not.contain', testData.errorText);

    })
})



