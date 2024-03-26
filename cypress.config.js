const cucumber = require  ('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       allureCypress(on);
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      
    },
    baseUrl:"http://live.techpanda.org/index.php/",
    specPattern: "cypress/e2e/*.feature",
  },
});