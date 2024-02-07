let testData= {
    position1: 'nb-option:contains("top-end")',
    titleValue: "Tanya toast",
    contentValue: "Tanya content",
    timeoutValue: 10000,
    type1: 'nb-option:contains("success")',
    rgbValue: 'rgb(96, 175, 32)'
}



before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('span:contains("Modal & Overlays")').click();

    cy.get('span:contains("Toastr")').click();

})

it(`Filling out`, () => {

    cy.get('button:contains("top-right")').click();
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

    cy.get ('nb-toast').should('be.visible');
    cy.get ('nb-toast').should('contain', `${testData.titleValue}`);
    cy.get ('nb-toast').should('contain', `${testData.contentValue}`);

    cy.get('nb-toast').should('have.css', 'background-color').and('eq',
        `${testData.rgbValue}`);

    cy.get('nb-toast').invoke('offset').then(offset =>{

        const top = offset.top;
        const left = offset.left;

        expect(top).to.equal(8);
        expect(left).to.be.approximately(1140, 1150);
    });


})
