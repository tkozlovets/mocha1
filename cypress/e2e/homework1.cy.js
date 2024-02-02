


let testData = [{
    fieldSelector: '[placeholder="Jane Doe"]',
    inputValue: "Tetiana Kozlovets",

},{
    fieldSelector: 'nb-card.inline-form-card [placeholder="Email"]',
    inputValue: "tk@gmail.com",

},
    {
        fieldSelector: '.col-sm-9 #inputEmail3',
        inputValue: "tk@gmail.com",

    },

    {
        fieldSelector: '.col-sm-9 #inputPassword3',
        inputValue: "Thebestpassword12+",

    },

    {
        fieldSelector: 'nb-card:contains("Using the Grid") [placeholder="Email"]',
        inputValue: "tk@gmail.com",

    },

    {
        fieldSelector: 'nb-card:contains("Using the Grid") [placeholder="Password"]',
        inputValue: "Thebestpassword12+",

    },

    {
        fieldSelector: 'nb-card:contains("Basic form") [placeholder="Email"]',
        inputValue: "tk@gmail.com",

    },

    {
        fieldSelector: 'nb-card:contains("Basic form") [placeholder="Password"]',
        inputValue: "Thebestpassword12+",

    },

    {
        fieldSelector: 'nb-card:contains("Form without labels") [placeholder="Recipients"]',
        inputValue: "Recipients lalalal",

    },

    {
        fieldSelector: 'nb-card:contains("Form without labels") [placeholder="Subject"]',
        inputValue: "Subject lalalal",

    },

    {
        fieldSelector: 'nb-card:contains("Form without labels") [placeholder="Message"]',
        inputValue: "Message lalalal",

    },

    {
        fieldSelector: '[placeholder="First Name"]',
        inputValue: "Tanya",

    },

    {
        fieldSelector: '[placeholder="Last Name"]',
        inputValue: "Kozlovets",

    },

    {
        fieldSelector: 'nb-card:contains("Block form") [placeholder="Email"]',
        inputValue: "tk@gmail.com",

    },

    {
        fieldSelector: '[placeholder="Website"]',
        inputValue: "Kozlovets",

    }

]

let testData1 = [{
    fieldSelector1: 'nb-card.inline-form-card .custom-checkbox'
},

    {
        fieldSelector1: 'nb-card.inline-form-card button'
    },

    {
        fieldSelector1: 'nb-card:contains("Horizontal form") .custom-checkbox'
    },

    {
        fieldSelector1: 'nb-card:contains("Horizontal form") button'
    },

    {
        fieldSelector1: 'span:contains("Option 1")'
    },

    {
        fieldSelector1: 'span:contains("Option 2")'
    },

    {
        fieldSelector1: 'span:contains("Disabled Option")'
    },

    {
        fieldSelector1: '.form-horizontal.ng-untouched.ng-pristine.ng-valid button")'
    },

    {
        fieldSelector1: 'span:contains("Check me out")'
    },

    {
        fieldSelector1: 'nb-card:contains("Basic form") button'
    },

    {
        fieldSelector1: 'nb-card:contains("Form without labels") button'
    },

    {
        fieldSelector1: 'nb-card:contains("Block form") button") button'
    }
]



it('Before filling out', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('span:contains("Forms")').click();

    cy.get('span:contains("Form Layouts")').click();

        })


testData.forEach(testData => {
    it(`Form filling out`, () => {


       cy.get(testData.fieldSelector).type(`${testData.inputValue}`);

    })

})

testData1.forEach(testData1 => {
        it(`Clicking`, () => {

            cy.get(testData1.fieldSelector1).click();

        })
})



