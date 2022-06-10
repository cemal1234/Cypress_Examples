/// <reference types='cypress'/>


context('TKB Login Sayfasi', () => {
  
    it('TC01 URL e git', () => {

      cy.request({
        url:'http://ui.tkb-acc.dev.rally.softtech/services/authorization/api/authentication/authenticate',
        headers:{
          "Accept": "application/json;charset=UTF-8",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "tr-tr",
          "Connection": "keep-alive",
          "Content-Length": "45",
          "Content-Type": "application/x-www-form-urlencoded",
          "Cookie": "JSESSIONID=MTZmMzI1MDktZTU2Yy00ZmNhLTgxZjEtOTc3MTFlNzA1OTUw",
          "Host": "ui.tkb-acc.dev.rally.softtech",
          "Origin": "http://ui.tkb-acc.dev.rally.softtech",
          "Referer": "http://ui.tkb-acc.dev.rally.softtech/login"

        },
        method: 'POST',
        body: {
          user: "currentAccountMaker",
          password: 123456,
          id: 1
        },
        failOnStatusCode: false,


      }).its('body')
      .then(res => localStorage.setItem('LogonData',res.access_token));

      cy.visit('http://ui.tkb-acc.dev.rally.softtech/login',{failOnStatusCode: false})
      cy.wait(20000)

      cy.get('[id="login_username"]').type('currentAccountMaker')
      cy.get('[id="login_password"]').type('123456')
      cy.get('#login_id').click(),{failOnStatusCode: false}



/*       cy.get('head > title')
      .should('have.text','İşlem Yönetimi') */




/*       cy.authenticateUrl()
      cy.visit('http://ui.tkb-acc.dev.rally.softtech/login',{failOnStatusCode: false})
      cy.wait(10000) */
      
    })  
    
/*     it('TC02, Basarili login', () => {
      cy.get('[id="login_username"]').type('currentAccountMaker')
      cy.get('[id="login_password"]').type('123456')
      cy.get('#login_id').click()
      cy.get('head > title')
      .should('have.text','İşlem Yönetimi')
    }) */
})
