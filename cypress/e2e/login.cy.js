describe('Проверка авторизации', function () {
   it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти зайдизейблена
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик 
    })
   it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#forgotEmailButton').click(); // нажимаем забыли пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели логин
        cy.get('#restoreEmailButton').click(); // клик отправить код
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик    
    })
   it('Верный логин, не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#pass').type('46ikreffe'); // ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти зайдизейблена
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик 
    })
   it('Не верный логин,  верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#mail').type('paur2014@mail.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти зайдизейблена
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик 
    })
   it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти зайдизейблена
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик 
    })
   it('Проверка строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели  строчными буквами логин 
        cy.get('#loginButton').should('be.disabled'); // кнопка войти зайдизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти зайдизейблена
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик 
    })



})



