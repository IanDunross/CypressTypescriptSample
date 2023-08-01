const { defineConfig } = require("cypress");
import {tagify} from 'cypress-tags'

module.exports = defineConfig({
 
  e2e: {
    baseUrl:"https://juliemr.github.io/protractor-demo/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',tagify(config))
    },
  },
});
