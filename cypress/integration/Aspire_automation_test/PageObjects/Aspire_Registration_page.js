/// <reference types="cypress" />

export class Aspire_Registration_page {
    //====================Common controls====================
    Email_txt() {
        return cy.get('input[data-cy = register-person-email]')
    }

    Login_btn() {
        return cy.get('button[type = submit]').contains('Login', { timeout: 1000 })
    }

    LoginWithEmail_link() {
        return cy.get('#q-app > div > div > div > main > form > div.new-form__inputs > div.flex.justify-end.q-mt-sm > button > span.q-btn__wrapper.col.row.q-anchor--skip > span > img')
    }

    //====================Register detail page====================
    RegPersonal_txt() {
        return cy.get('input[name = full_name]')
    }
    RegEmailAddress_txt() {
        return cy.get('input[name = email]')
    }
    RegPhoneNumber_txt() {
        return cy.get('input[name = phone]')
    }
    RegPersonHearAbout_selector() {
        return cy.get('div[data-cy = register-person-heard-about]')
    }

    RegPersonHearAboutDetails_txt() {
        return cy.get('input[data-cy=register-person-heard-about-details]')
    }

    RegPersonalPrivacy_chk() {
        return cy.get('div[data-cy=register-person-privacy]')
    }

    RegContinue_btn() {
        return cy.get('#q-app > div > div > div > main > form > div.new-form__buttons > div > div > button > span.q-btn__wrapper.col.row.q-anchor--skip > span > span').contains('Continue', { timeout: 1000 })
    }
    //====================Common actions====================
    Navigate(Url){
        cy.visit(Url);
    }

    //====================Main actions====================

    LogInWithEmail(email) {
        this.Email_txt().type(email)
        this.Login_btn().click()
        cy.wait(1000)



    }

}