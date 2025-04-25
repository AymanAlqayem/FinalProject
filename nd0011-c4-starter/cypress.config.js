import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234",
    specPattern: "nd0011-c4-starter/starter/e2e/*.cy.js", // Absolute path from the root
    supportFile: false,
    setupNodeEvents(on, config) {},
  },
});
