/// <reference types="cypress" />
import {Aspire_OTP_page} from "../PageObjects/Aspire_OTP_page"
import {Aspire_Registration_page} from "../PageObjects/Aspire_Registration_page"
import {ConfigTest} from "../Settings/ConfigTest"
const default_setting = new ConfigTest()
const aspire_otp_page = new Aspire_OTP_page() 
const aspire_registration_page = new Aspire_Registration_page()

let testData =
{testUrl:'https://qa-test.customer-frontend.staging.aspireapp.com/',
testEmail:'Testauto@mailinator.com',
testOTP:'123456',
testNation: 'United States (+1)',
testPhone: '2243238312'
}

describe('Registration function on email and mobile phone', ()=>{
    default_setting.generalConfig()
// Pre-Conditions:
beforeEach(() =>{
    aspire_registration_page.Navigate(testData.testUrl)
    // default_setting.generalConfig()
})

/*
=======================================================================
1. Verify functionality of login with valid credentials .
=======================================================================

*/
it('TC01: Verify that user able to login with registered mobile phone',()=>{
    aspire_registration_page.LogInWithNationPhone(testData.testNation,testData.testPhone)
    aspire_otp_page.InputOTP(testData.testOTP)
  })



})