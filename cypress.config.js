const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 2
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
