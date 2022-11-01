const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }



module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
          const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });
    
          on("file:preprocessor", bundler);
          addCucumberPreprocessorPlugin(on, config);
            allureWriter(on, config);
            return config;
        },
        // specPattern: "cypress/e2e/features/Entity/entity_composite_product_test.feature", 
        specPattern: "cypress\\e2e\\features\\*.feature", 
        chromeWebSecurity: false,
    },  
    "viewportWidth": 1920,
    "viewportHeight": 1080

    
});
 
