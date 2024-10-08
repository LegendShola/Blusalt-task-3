const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners her
    },
    specPattern: 'cypress/integration/**/*spec.js',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
});
