const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1550,
  viewportHeight: 800,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});