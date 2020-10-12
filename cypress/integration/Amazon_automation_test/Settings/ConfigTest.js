/// <reference types="cypress" />
export class ConfigTest{

    generalConfig(){
    Cypress.config('pageLoadTimeout', 75000);
    Cypress.config('defaultCommandTimeout',15000,);
    Cypress.config('chromeWebSecurity',false)
    // Cypress.LocalStorage.clear();
    }

}