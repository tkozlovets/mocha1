


let testData = [{
    fieldSelector: '[placeholder="Jane Doe"]',
    inputValue: "Tetiana Kozlovets",
    fieldSelector1: 'nb-card.inline-form-card [placeholder="Email"]',
    inputValue1: "tk@gmail.com",
    fieldSelector2: 'nb-card.inline-form-card .custom-checkbox',
    fieldSelector3: 'nb-card.inline-form-card button',

    fieldSelector4: 'nb-card:contains("Using the Grid") [placeholder="Email"]',
    inputValue2: "tk@gmail.com",
    fieldSelector5: 'nb-card:contains("Using the Grid") [placeholder="Password"]',
    inputValue3: "Thebestpassword12+",
    fieldSelector6: 'span:contains("Option 1")',
    fieldSelector7: '.form-horizontal.ng-untouched.ng-pristine.ng-valid button',


    fieldSelector8: 'nb-card:contains("Basic form") [placeholder="Email"]',
    inputValue4: "tk@gmail.com",
    fieldSelector9: 'nb-card:contains("Basic form") [placeholder="Password"]',
    inputValue5: "Thebestpassword12+",
    fieldSelector10: 'span:contains("Check me out")',
    fieldSelector11:'nb-card:contains("Basic form") button',

    fieldSelector12: 'nb-card:contains("Form without labels") [placeholder="Recipients"]',
    inputValue6: "Recipients lalalal",
    fieldSelector13: 'nb-card:contains("Form without labels") [placeholder="Subject"]',
    inputValue7: "Subject lalalal",
    fieldSelector14: 'nb-card:contains("Form without labels") [placeholder="Message"]',
    inputValue8: "Message lalalal",
    fieldSelector15:'nb-card:contains("Form without labels") button',

    fieldSelector16: '[placeholder="First Name"]',
    inputValue9: "Tanya",
    fieldSelector17: '[placeholder="Last Name"]',
    inputValue10: "Kozlovets",
    fieldSelector18: 'nb-card:contains("Block form") [placeholder="Email"]',
    inputValue11: "tk@gmail.com",
    fieldSelector19:'[placeholder="Website"]',
    inputValue12: "www.tk.com",
    fieldSelector20: 'nb-card:contains("Block form") button',

    fieldSelector21: '.col-sm-9 #inputEmail3',
    inputValue13: "tk@gmail.com",
    fieldSelector22: '.col-sm-9 #inputPassword3',
    inputValue14: "Thebestpassword12+",
    fieldSelector23: 'nb-card:contains("Horizontal form") .custom-checkbox',
    fieldSelector24: 'nb-card:contains("Horizontal form") button',

    },
    {
        fieldSelector: '[placeholder="Jane Doe"]',
        inputValue: "Тетяна Козловець",
        fieldSelector1: 'nb-card.inline-form-card [placeholder="Email"]',
        inputValue1: "tk1@gmail.com",
        fieldSelector2: 'nb-card.inline-form-card .custom-checkbox',
        fieldSelector3: 'nb-card.inline-form-card button',

        fieldSelector4: 'nb-card:contains("Using the Grid") [placeholder="Email"]',
        inputValue2: "tk1@gmail.com",
        fieldSelector5: 'nb-card:contains("Using the Grid") [placeholder="Password"]',
        inputValue3: "Thebestpassword12+",
        fieldSelector6: 'span:contains("Option 1")',
        fieldSelector7: '.form-horizontal.ng-untouched.ng-pristine.ng-valid button',


        fieldSelector8: 'nb-card:contains("Basic form") [placeholder="Email"]',
        inputValue4: "tk1@gmail.com",
        fieldSelector9: 'nb-card:contains("Basic form") [placeholder="Password"]',
        inputValue5: "Thebestpassword12+",
        fieldSelector10: 'span:contains("Check me out")',
        fieldSelector11:'nb-card:contains("Basic form") button',

        fieldSelector12: 'nb-card:contains("Form without labels") [placeholder="Recipients"]',
        inputValue6: "Ресіпіенти лалала",
        fieldSelector13: 'nb-card:contains("Form without labels") [placeholder="Subject"]',
        inputValue7: "Сабжект лалала",
        fieldSelector14: 'nb-card:contains("Form without labels") [placeholder="Message"]',
        inputValue8: "меседж лалала",
        fieldSelector15:'nb-card:contains("Form without labels") button',

        fieldSelector16: '[placeholder="First Name"]',
        inputValue9: "Таня",
        fieldSelector17: '[placeholder="Last Name"]',
        inputValue10: "Козловець",
        fieldSelector18: 'nb-card:contains("Block form") [placeholder="Email"]',
        inputValue11: "tk1@gmail.com",
        fieldSelector19:'[placeholder="Website"]',
        inputValue12: "www.тк.com",
        fieldSelector20: 'nb-card:contains("Block form") button',

        fieldSelector21: '.col-sm-9 #inputEmail3',
        inputValue13: "tk1@gmail.com",
        fieldSelector22: '.col-sm-9 #inputPassword3',
        inputValue14: "Thebestpassword12+",
        fieldSelector23: 'nb-card:contains("Horizontal form") .custom-checkbox',
        fieldSelector24: 'nb-card:contains("Horizontal form") button',

    }]

beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('span:contains("Forms")').click();

    cy.get('span:contains("Form Layouts")').click();

})

testData.forEach(testData => {it(`Form filling out`, () => {


    cy.get(testData.fieldSelector).type(`${testData.inputValue}`);
    cy.get(testData.fieldSelector1).type(`${testData.inputValue1}`);
    cy.get(testData.fieldSelector2).click();
    cy.get(testData.fieldSelector3).click();


    cy.get(testData.fieldSelector4).type(`${testData.inputValue2}`);
    cy.get(testData.fieldSelector5).type(`${testData.inputValue3}`);
    cy.get(testData.fieldSelector6).click();
    cy.get(testData.fieldSelector7).click();

    cy.get(testData.fieldSelector8).type(`${testData.inputValue4}`);
    cy.get(testData.fieldSelector9).type(`${testData.inputValue5}`);
    cy.get(testData.fieldSelector10).click();
    cy.get(testData.fieldSelector11).click();

    cy.get(testData.fieldSelector12).type(`${testData.inputValue6}`);
    cy.get(testData.fieldSelector13).type(`${testData.inputValue7}`);
    cy.get(testData.fieldSelector14).type(`${testData.inputValue8}`);
    cy.get(testData.fieldSelector15).click();

    cy.get(testData.fieldSelector16).type(`${testData.inputValue9}`);
    cy.get(testData.fieldSelector17).type(`${testData.inputValue10}`);
    cy.get(testData.fieldSelector18).type(`${testData.inputValue11}`);
    cy.get(testData.fieldSelector19).type(`${testData.inputValue12}`);
    cy.get(testData.fieldSelector20).click();

    cy.get(testData.fieldSelector21).type(`${testData.inputValue13}`);
    cy.get(testData.fieldSelector22).type(`${testData.inputValue14}`);
    cy.get(testData.fieldSelector23).click();
        cy.get(testData.fieldSelector24).click();

    })
    })










