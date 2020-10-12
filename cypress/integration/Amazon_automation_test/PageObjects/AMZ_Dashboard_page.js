/// <reference types="cypress" />
import {AMZ_Login_page} from "../PageObjects/AMZ_Login_page"
const login_page = new AMZ_Login_page() 
export class AMZ_Dashboard_page {

// Controls
    
    Search_btn(){
        return cy.get('input[value = Go]')
    }

    Search_txt(text){
        return cy.get('input[id= twotabsearchtextbox]').focus().clear().type(text)
    }

// Main actions

    Navigate(Url){
        cy.visit(Url);
    }

    Goto_SignIn_Page(){
        cy.get('#nav-link-accountList').focus().click()
    }

    Make_search(selectDepartment , keyWord){
        // Make search with combination of selected department and keyWord
        if(selectDepartment !=='' && keyWord !==''){
            cy.get('#searchDropdownBox')
            .select(selectDepartment,{force:true})
            cy.wait(2000)
            this.Search_txt(keyWord)
            cy.wait(1000)
            this.Search_btn().click()
        }

        // Make search with keyWord only
        else if(selectDepartment ==='' && keyWord !=='') {
            cy.wait(2000)
            this.Search_txt(keyWord)
            this.Search_btn().click()
        }

        // Make search with department only
        else if(selectDepartment !=='' && keyWord ==='') {
            cy.wait(2000)
            this.Search_txt(keyWord)
            this.Search_btn().click()
        }
    }

    Check_Total_items_On_Search_Page(expected_number){
      return cy.get('#search>div>div>div>span:nth-child(4)').within(()=>{
           cy.get('div.s-main-slot.s-result-list.s-search-results.sg-row>div>.sg-col-inner')
           .children().should('have.length',parseFloat(expected_number))
       })
    }
  

}

    