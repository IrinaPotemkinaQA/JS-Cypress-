describe('Проверка авторизации', function () {
    //1 
        it('Верный пароль и верный логин', function () {
             cy.visit('https://login.qa.studio/'); //зашли на сайт
             cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
             cy.get('#pass').type('iLoveqastudio1'); //ввели правельный пароль
             cy.get('#loginButton').click(); //нажала войти
             cy.get('#messageHeader').contains('Авторизация прошла успешно');
             cy.get('#messageHeader').should('be.visible');
             cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    //2 
            it('Проверка логики восстановить пароль', function () {
                 cy.visit('https://login.qa.studio/'); //зашли на сайт
                 cy.get('#forgotEmailButton').click(); //нажала забыли пароль
                 cy.get('#mailForgot').type('irina@mail.ru'); //ввели любой логин
                 cy.get('#restoreEmailButton').click(); //нажала отправить код
                 cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
                 cy.get('#messageHeader').should('be.visible');
                 cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
    //3
            it('Негативный кейс авторизации', function () {
                cy.visit('https://login.qa.studio/'); //зашли на сайт
                cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
                cy.get('#pass').type('iLoveqastudio12'); //ввели не правильный пароль
                cy.get('#loginButton').click(); //нажала войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#messageHeader').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })
    //4
           it('Негативный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            cy.get('#mail').type('ISgerman@dolnikov.ru'); //ввели не правильный логин
            cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
            cy.get('#loginButton').click(); //нажала войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
    //5
            it('Негативный кейс валидации', function () {
                cy.visit('https://login.qa.studio/'); //зашли на сайт
                cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
                cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
                cy.get('#loginButton').click(); //нажала войти
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                cy.get('#messageHeader').should('be.visible');
                })
    //6
                it('Приведение к строчным буквам в логине', function () {
                    cy.visit('https://login.qa.studio/'); //зашли на сайт
                    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин 
                    cy.get('#pass').type('iLoveqastudio1'); //ввели правильный пароль
                    cy.get('#loginButton').click(); //нажала войти
                    cy.get('#messageHeader').contains('Такого логина или пароля нет');
                    cy.get('#messageHeader').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })
        }) 
     
     
     
    
     // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
     