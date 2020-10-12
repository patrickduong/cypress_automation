/// <reference types="cypress" />
export class Aspire_OTP_page {
    // controls

    VerifyOTP_message() {
        return cy.get('div[class = verify-otp__message]')
    }

    OTPInputPIN_txt() {
        return cy.get('input[data-cy = digit-input-pin]')

    }

    VerifyOTP_btn() {
        return cy.get('#q-app > div > div > div > main > form > div.new-form__buttons > div > div > button > span.q-btn__wrapper.col.row.q-anchor--skip > span > span').contains('Verify')
    }
    // main actions

    InputOTP(otp_pin) {
        this.OTPInputPIN_txt().type(otp_pin)
        this.VerifyOTP_btn().click()
        cy.wait(1000)

    }
}