const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  videosFolder: 'cypress/video',
  video: true,
  videoCompression: 32,
  screenshotsFolder: 'cypress/screenshots',
  screenshotsOnRunFailure: true,
});
