# Atomate some scenarios for e-commerce website 
   ### This e-commerce website is for mobile a TV products   

## Subscribe to this website (Guru99) first to receive daily tasks that can be automated.

## To automate with cypress frist you should install:
    1- Nodejs
    2-the following commands at terminal to work with cypress
        -npm init
        -npm install cypress --save-dev
        -npm run test
    3-the following comands to work with cucumber
        -npm install --save-dev cypress-cucumber-preprocessor
        -add at the cypress.config file the following:
               ```
                const { defineConfig } = require("cypress");
                const cucumber = require("cypress-cucumber-preprocessor").default;
                module.exports = defineConfig({
                    e2e: {
                            setupNodeEvents(on, config) {
                            on("file:preprocessor", cucumber());
                        },
                        baseUrl:"http://live.techpanda.org/index.php/",
                        specPattern: "cypress/integration/*.feature",
            },
            });
             ```
    4- add the following at the package.json file
        ```
       - "cypress-cucumber-preprocessor": {
        "nonGlobalStepDefinitions": false
         }
         ```