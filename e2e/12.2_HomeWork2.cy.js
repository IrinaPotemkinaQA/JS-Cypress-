describe('Покупка аватара', function () {                             
    it('Покупка нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.me/');       //  сайт
         cy.clearCookies() 
         cy.wait(5000)
         cy.get('input[type="email"]').type('USER_LOGIN');      // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');    // вводим пароль
         cy.get('.auth__button').click(); //нажала войти
         cy.get('.header__btns > [href="/shop"]').click(); //кнопка магазин
         cy.get('.available > button').first().click();  // первый аватар
         cy.get('.credit').type('4620869113632996');   //номер карты
         cy.get('.k_input_ccv').type('125'); //код карты
         cy.get('.k_input_date').type('1225'); //срок действия
         cy.get('.k_input_name').type('IRINA'); //имя
         cy.get('.pay-btn').click(); //кнопка оплатить
         cy.get('#cardnumber').type('56456');  //код подтверждения
         cy.get('.payment__submit-button').click();    //кнопка отправить
         cy.wait(5000)
         cy.contains('Покупка прошла успешно').should('be.visible'); 
     });
 });
 


     
     //npx cypress open