// На сторінці https://sanitarskyi-ngx-admin.herokuapp.com/pages/forms/layouts
//Заповнити будь-яку форму за допомогою параметризованого теста.
//Form filling out without parametrized test.
describe('Homework-locators', () => {
    it('Homework-locators', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

        cy.get('nb-card-header:contains("Material Light")').click();

        cy.get('span:contains("Forms")').click();

        cy.get('span:contains("Form Layouts")').click();

        cy.log('Get Jane Doe field on Inline form');

        cy.get('[placeholder="Jane Doe"]').type('Tetiana Kozlovets');

        cy.log('Get Email field on Inline form');
        cy.get('nb-card.inline-form-card [placeholder="Email"]').type('tk@gmail.com');

        cy.log('Get Remember me checkbox on Inline form');
        cy.get('nb-card.inline-form-card .custom-checkbox').click();

        cy.log('Get Submit on Inline form');
        cy.get('nb-card.inline-form-card button').click();



        cy.log('Get Email field on Horizontal form');
        cy.get('.col-sm-9 #inputEmail3').type('tk@gmail.com');

        cy.log('Get Password field on Horizontal form');
        cy.get('.col-sm-9 #inputPassword3').type('Thebestpassword12+');

        cy.log('Get Remember me checkbox on Horizontal form');
        cy.get('nb-card:contains("Horizontal form") .custom-checkbox').click();

        cy.log('Get Sign in button on Horizontal form');
        cy.get('nb-card:contains("Horizontal form") button').click();

        cy.log('Get Email field on Using the Grid form');
        cy.get('nb-card:contains("Using the Grid") [placeholder="Email"]').type('tk@gmail.com');

        cy.log('Get Password field on Using the Grid form');
        cy.get('nb-card:contains("Using the Grid") [placeholder="Password"]').type('Thebestpassword12+');

        cy.log('Get Option1 radio button on Using the Grid form');
        cy.get('span:contains("Option 1")').click();

        cy.log('Get Option2 radio button on Using the Grid form');
        cy.get('span:contains("Option 2")').click();

        cy.log('Get Disabled Option radio button on Using the Grid form');
        cy.get('span:contains("Disabled Option")').click();

        cy.log('Get Submit button on Using the Grid form');
        cy.get('.form-horizontal.ng-untouched.ng-pristine.ng-valid button').click();

        cy.log('Get Email field on Basic form');
        cy.get('nb-card:contains("Basic form") [placeholder="Email"]').type('tk@gmail.com');

        cy.log('Get Password field on Basic form');
        cy.get('nb-card:contains("Basic form") [placeholder="Password"]').type('Thebestpassword12+');

        cy.log('Get Check me out checkbox on Basic form');
        cy.get('span:contains("Check me out")').click();

        cy.log('Get Submit button on Basic form');
        cy.get('nb-card:contains("Basic form") button').click();

        cy.log('Get Email field on Form without labels');
        cy.get('nb-card:contains("Form without labels") [placeholder="Recipients"]').type('Recipients lalalal');
        cy.get('nb-card:contains("Form without labels") [placeholder="Subject"]').type('Subject lalalal');
        cy.get('nb-card:contains("Form without labels") [placeholder="Message"]').type('Message lalalal');
        cy.get('nb-card:contains("Form without labels") button').click();


        cy.log('Get First Name field on Block form');
        cy.get('[placeholder="First Name"]').type('Tanya');

        cy.log('Get Last Name field on Block form');
        cy.get('[placeholder="Last Name"]').type('Kozlovets');

        cy.log('Get Email field on Block form');
        cy.get('nb-card:contains("Block form") [placeholder="Email"]').type('tk@gmail.com');

        cy.log('Get Last Name field on Block form');
        cy.get('[placeholder="Website"]').type('Kozlovets');

        cy.log('Get Submit on Block form');
        cy.get('nb-card:contains("Block form") button').click();


    })
})





