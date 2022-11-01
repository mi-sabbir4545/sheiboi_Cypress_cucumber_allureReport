 clone this repo and open terminal with root project directory and following the command step by step:
 #### install the dependencies
 ```bash
 1. npm init -y
 ```
 ```bash
 2. npm install cypress --save-dev
 ```
 ```bash
 3. npm install @badeball/cypress-cucumber-preprocessor
 ```
 ```bash
 4. npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
 ```
 ```bash
 5. npm i @shelex/cypress-allure-plugin
 ```
 ```bash
 6. npm i cypress-xpath
 ```
  ```bash
 7. npm i cypress-parallel
 ```
 
 #### simple run:
 
 ```bash
  npm run cy:run
 ```
 #### run with generate allure results:
  ```bash
  npm run cy:run:allure
 ```
 #### run in parallel with allure results:
  ```bash
  npm run cy:parallel  
 ```
  #### see allure results:
 ```bash
 allure serve .\allure-results\ 
 ```
