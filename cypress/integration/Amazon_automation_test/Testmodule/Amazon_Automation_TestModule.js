/// <reference types="cypress" />
import {AMZ_Dashboard_page} from "../PageObjects/AMZ_Dashboard_page"
import {AMZ_Login_page} from "../PageObjects/AMZ_Login_page"
import {ConfigTest} from "../Settings/ConfigTest"
const amz_dashboardPage = new AMZ_Dashboard_page() 
const amz_loginPage = new AMZ_Login_page()
const default_setting = new ConfigTest()


let testData =
{testUrl:'https://www.amazon.com',
validUser:'testuser@mailinator.com',
validPassword:'candidatetestnvg1234',
key_search1:'Books'
,key_search2:'apple'
, key_search3:'English'}

describe('Testing path C case 1 and 2', ()=>{
default_setting.generalConfig()

// Pre-Conditions:
beforeEach(() =>{
  amz_dashboardPage.Navigate(testData.testUrl)
  amz_dashboardPage.Goto_SignIn_Page()
})

/*
=======================================================================
1. Verify functionality of login with invalid account.
=======================================================================
*/

    it('1.1 Verify functionality of login with invalid account - wrong mobile number.',()=>{
      amz_loginPage.Email_txt().type('1')
      amz_loginPage.Continue_btn().click()
      amz_loginPage.Alert_Incorrect_Phone().should('exist')
    })

    it('1.2 Verify functionality of login with invalid account - wrong email',()=>{
      amz_loginPage.Email_txt().clear().type('testmail.com')
      amz_loginPage.Continue_btn().click()
      amz_loginPage.Alert_NotFound_Account().should('exist')
    })

    it('1.3 Verify functionality of login with invalid account - wrong password',()=>{
      amz_loginPage.LogIn(testData.validUser,'abc')
      amz_loginPage.Alert_Incorrect_Password().should('exist')
    })

/*
=======================================================================
2. Verify user can login to amazon with a valid .
=======================================================================
*/

    it('2. Verify user can login to amazon with a valid account',()=>{
      amz_loginPage.LogIn(testData.validUser,testData.validPassword)
      amz_loginPage.AuthenticationScreen().should('contain','Authentication required') //Temporary check Authentication screen display after input valid user name password due to 2FA feature on AWS
    })
})

describe('Testing path C case 3 and 4', ()=>{
  // Preconditions:
  before(() =>{
    amz_dashboardPage.Navigate(testData.testUrl)
  })

/* 
=======================================================================
3. Verify result list is paginated if there are more than 16 items
    a. Perform a search with:
      i. Department:  Books
      ii. Keyword : apple
      iii. Book Language : English
    b. The Result displays exactly 16 items on each page.
=======================================================================
*/

    it('3.1 Perform search with "Department: Book". Make sure result for each key is 16',()=>{
      amz_dashboardPage.Make_search(testData.key_search1,testData.key_search1)
      amz_dashboardPage.Check_Total_items_On_Search_Page(16)
    })

    it('3.2 Perform search with "Keyword: apple". Make sure result is 16',()=>{
      amz_dashboardPage.Make_search('All Departments',testData.key_search2) 
      amz_dashboardPage.Check_Total_items_On_Search_Page(48) //=> not stable due to DOM changes
    })

    it('3.3 Perform search with "Book Language: English". Make sure result for each key is 16',()=>{
      amz_dashboardPage.Make_search(testData.key_search1,testData.key_search3)
      amz_dashboardPage.Check_Total_items_On_Search_Page(16)
    })
/* 
=======================================================================
4. Verify result list can be sorted on demand
    a. Perform a search with:
      i. Department:  Books 
      ii. Keyword : apple
      iii. Book Language : English
      iv. Change sort option to Publication date
b. The Result is sorted by  Publication date
=======================================================================
Note: this test case unable to automate due to Publication option no longer exist on sort option
*/

})
