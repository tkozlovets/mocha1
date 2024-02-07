let testData= [{
    position: 'button:contains("top-right")',
    position1: 'nb-option:contains("top-end")',
    titleValue: "Tanya toast",
    contentValue: "Tanya content",
    timeoutValue: 10000,
    type1: 'nb-option:contains("success")',
    rgbValue: 'rgb(96, 175, 32)',
    jcValue: 'flex-end',
    aiValue: 'flex-start'
},
    {

    position: 'button:contains("top-right")',
    position1: 'nb-option:contains("top-left")',
    titleValue: "Tanya toast",
    contentValue: "Tanya content",
    timeoutValue: 10000,
    type1: 'nb-option:contains("success")',
    rgbValue: 'rgb(96, 175, 32)',
    jcValue: 'flex-start',
    aiValue: 'flex-start'
}]





beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('span:contains("Modal & Overlays")').click();

    cy.get('span:contains("Toastr")').click();

})

testData.forEach(testData => {
    it(`Filling out`, () => {

        cy.get(testData.position).click();
        cy.get(testData.position1).click();
        cy.get('input[name="title"]').clear();
        cy.get('input[name="title"]').type(`${testData.titleValue}`);
        cy.get('input[name="content"]').clear();
        cy.get('input[name="content"]').type(`${testData.contentValue}`);
        cy.get('input[name="timeout"]').clear();
        cy.get('input[name="timeout"]').type(`${testData.timeoutValue}`);
        cy.get('button:contains("primary")').click();
        cy.get(`${testData.type1}`).click();
        cy.get('span:contains("Hide on click")').click();
        cy.get('button:contains("Show toast")').click();
        cy.get('nb-toast').click();

        cy.get('nb-toast').should('be.visible');
        cy.get('nb-toast').should('contain', `${testData.titleValue}`);
        cy.get('nb-toast').should('contain', `${testData.contentValue}`);

        cy.get('nb-toast').should('have.css', 'background-color').and('eq',
            `${testData.rgbValue}`);

        cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq',
            `${testData.jcValue}`);
        cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq',
            `${testData.aiValue}`);

    })
})


// style="justify-content: flex-end; align-items: flex-start
// justify-content: flex-start; align-items: flex-start;
