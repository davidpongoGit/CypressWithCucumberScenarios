Summary:
I've used Cypress test automation tool at v9.7.0 and created Page-Object Modelling library for the example test website. I have also installed and configured various open-source plugins including Cucumber Preprocessor to write my test cases with BDD/Agile oriented approach.  This demo acts as a showcase of my current automation skills and knowledge of automation architecture. Just to quickly demonstrate how I write automation in Cypress, I have done the first 4 exercices inluding building Page-Object Models. Everything is built from scratch by me. Inspect my code especially in the .spec.js files and read the comments to understand my reasoning and approach.

I am using http://uitestingplayground.com/ as the public example test website. I've built the Automation Framework for that website. 

Software Used: Git Bash, IntelliJ IDE Ultimate<br>
Stack: JavaScript, NODE.js v16.14.2, NPM v9.6.4, Chocolatey 1.1, Python 3.1.1, VS19 Build Tool (This can as part of NODE)<br>
IDE Plugins used for IDE (Optional): Cypress Support (Mikhail Bolotov), Gherkin, Cucumber.js, Cucumber +, Rainbow Backets. <br>
Open-Source Libraries used for Automation: Cypress@9.7.0, Cypress-Cucumber-Preprocessor@4.3.1, Cypress-If@1.10.2<br>

Version of Cypress:<br>
I am using an older version of Cypress because the developers of Cucumber plugin did not updated the plugin to be compatible with the latest generation of Cypress at the time of me installing the plugin. 

HOW TO RUN THE TESTS:<br>
1. Install IntelliJ or any other modern IDE
2. Download and install NODE.js
3. Open my repository in your IDE
4. In terminal, run the following code: npm install
5. To open Cypress, run the following code: npm run cypress-ui
6. To run all tests from CLI, run the follwoing code: npm run all-tests
