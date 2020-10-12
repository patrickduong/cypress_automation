To run the test you must have the following thing.
1. Cypress installed in locally
2.  Import or open the current work space with VScode
3. Go to the parent directory (cypress_root) 
4. Open terminal and enter npx cypress run cypress\integration\Amazon_automation_test\Testmodule\Amazon_Automation_TestModule.js
5. Wait until all cases are executed 
6. To see the screen shot and recorded videos you can go to cypress\screenshots and cypress\videos

For design styles:
1. PageObjects folder will contain the testing object pages, inside each page will contains 2 things are the captured controls and actions (common and mainactions) for reusable in Test module or test cases
2. Settings folder will contain the desirable settings which testers need to prepare for the testing environments
3. The TestModule folder will contain the test modules file (js) and in each test module file (feature will be grouped in 1 test module) will contain the relative test cases 
4. Structure of the test module will consist of 3 parth: precondition, testcase, and post condition (optional). The Test Requirement is equal to the key annotation ''describe" and each case will be equal to "it".

NOTE: since cypress has it's all skeleton for designing like fixture for containing data test, integration for containing all test suite/test modules/test cases, commands for designing custom commands. So, even if I apply the PageObject designation style It's may not be correct as a recommendation guideline.
