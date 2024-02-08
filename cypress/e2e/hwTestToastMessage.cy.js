// Кроки тесту:
// 1. Відкрити https://sanitarskyi-ngx-admin.herokuapp.com/
// 2. Вибрати будь-яку тему сайту
// 3. Клікнути на пункт меню Modal & Overlays
// 4. Клікнути на підпункт Toastr
// 5. Вибрати позицію тосту
// 6. Заповнити title довільним текстом
// 7. заповнити content довільним текстом
// 8. Обрати тип тоста
// 9. Клікнути на кнопку "Show toast"
// Очікуваний результат: тост містить текст, що був ведений в поля тайтл та контент,
// знаходиться у місці, відповідному до обраної позиції, має колір та містить іконку
// відповідні до обраного типу тоста.

// The array of objects with test data is created
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
},
    {

    position: 'button:contains("top-right")',
    position1: 'nb-option:contains("bottom-left")',
    titleValue: "Tanya toast",
    contentValue: "Tanya content",
    timeoutValue: 10000,
    type1: 'nb-option:contains("success")',
    rgbValue: 'rgb(96, 175, 32)',
    jcValue: 'flex-start',
    aiValue: 'flex-end'
},
    {
    position: 'button:contains("top-right")',
    position1: 'nb-option:contains("bottom-right")',
    titleValue: "Tanya toast",
    contentValue: "Tanya content",
    timeoutValue: 10000,
    type1: 'nb-option:contains("success")',
    rgbValue: 'rgb(96, 175, 32)',
    jcValue: 'flex-end',
    aiValue: 'flex-end',
}
]


// Steps to get to the page where toast message can be displayed
beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('nb-card-header:contains("Material Light")').click();

    cy.get('span:contains("Modal & Overlays")').click();

    cy.get('span:contains("Toastr")').click();

})
// Steps to set toast params and trigger a toast message to appear
// Steps to check if the toast message fulfills the requirements set in the test data
testData.forEach(testData => {
    it(`Filling out`, () => {

        cy.get(testData.position).click();//expand dropdown menu to select toast position
        cy.get(testData.position1).click();//select toast position
        cy.get('input[name="title"]').clear();//clear 'title' field
        cy.get('input[name="title"]').type(`${testData.titleValue}`);//fill out 'title' field
        cy.get('input[name="content"]').clear();//clear 'content' field
        cy.get('input[name="content"]').type(`${testData.contentValue}`);//fill out 'content' field
        cy.get('input[name="timeout"]').clear();//clear 'timeout' field
        cy.get('input[name="timeout"]').type(`${testData.timeoutValue}`);//fill out 'timeout' field
        cy.get('button:contains("primary")').click();//expand dropdown menu to select toast type
        cy.get(`${testData.type1}`).click();//select toast type
        cy.get('span:contains("Hide on click")').click();//click 'Hide on click' checkbox
        cy.get('button:contains("Show toast")').click();
        cy.get('nb-toast').click();

        cy.get('nb-toast').should('be.visible');
        cy.get('nb-toast').should('contain', `${testData.titleValue}`);//to validate toast contains the required title
        cy.get('nb-toast').should('contain', `${testData.contentValue}`);//to validate toast contains the required content

        cy.get('nb-toast').should('have.css', 'background-color').and('eq',
            `${testData.rgbValue}`);//to validate toast is of a required color

        cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq',
            `${testData.jcValue}`);//to validate toast has a required position
        cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq',
            `${testData.aiValue}`);//to validate toast has a required position

    })
})



