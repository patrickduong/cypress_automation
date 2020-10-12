export class AMZ_Login_page {
// controls

    Email_txt(){
        return cy.get('input[id = ap_email]')
    }
    
    Password_txt(){
        return cy.get('input[id = ap_password]')
    }

    Continue_btn(){
        return cy.get('input[id = continue]')
    }

    SignIn_btn(){
        return cy.get('input[id = signInSubmit]')
    }

    Alert_Incorrect_Phone (){
        return cy.get('#auth-error-message-box > div')
        .contains('Incorrect phone number')
    }
    Alert_NotFound_Account (){
        return cy.get('#auth-error-message-box > div')
        .contains('We cannot find an account with that email address')
    }
    
    Alert_Incorrect_Password (){
        return cy.get('#auth-error-message-box > div')
        .contains('Your password is incorrect')
    }

    AuthenticationScreen(){
        return cy.get('#cvf-page-content > div.a-section.a-spacing-double-large > div > div > form > div.a-row.a-spacing-small')
        .contains('Authentication required')
     }
    
//    Main actions
    LogIn(username,password){
        this.Email_txt().type(username)
        this.Continue_btn().click()
        cy.wait(1000)
        this.Password_txt().type(password)
        this.SignIn_btn().click()
        cy.wait(1000)
    }

}