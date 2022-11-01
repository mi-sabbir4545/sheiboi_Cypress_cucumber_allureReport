import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 
import CommonMethods from "./commonMethods";


const locator = new locatorsPage();
const data= new Data(); 
const common= new CommonMethods(); 


// <------------------------------------------------------------------->
// <----------------------- Login Steps ------------------------------->
// <------------------------------------------------------------------->


Given('Open sheiboi website', function() { 
    cy.visit(data.URL);
    // cy.url().should('eq', data.URL)
    cy.wait(500)
})

When("Click On The Login Icon", function() {
    cy.xpath(locator.click_login_icon).click()
    
})

And("Click On The Login Button", function() {
    cy.xpath(locator.click_login_button).click()
    cy.wait(500)
    
})

And("Users enter email in username field", () => {
    cy.xpath(locator.textbox_username_xpath).type(data.USERNAME);
})

And("Click on password field", function() {
    cy.xpath(locator.textbox_password1_xpath).click()
})

And("Users enter password in password field", function() {
    cy.xpath(locator.textbox_password2_xpath).type(data.PASSWORD);
})

And("Click on login button", function() {
    cy.xpath(locator.button_login_xpath).click()
})
Then ("User is displayed login screen", function(){

    cy.title().should('eq', 'সেইবই - বাংলা বইয়ের একটি অনলাইন ইবুক লাইব্রেরী।')

})

When("Again click On The Logout Icon", function() {
    cy.xpath(locator.button_logout_xpath).click()
    
})

And("Click On The LoginLogout Icon", function() {
    cy.xpath(locator.logout_link_xpath).click()
    
})

And("Click On The Home page", function() {
    cy.xpath(locator.click_homepage).click()
    
})

And("Click On subject page", function() {
    cy.xpath(locator.click_subjectPage).click()
    
})

And("Click On the writer page", function() {
    cy.xpath(locator.click_writer).click()
    
})

And("Click On the all books page", function() {
    cy.xpath(locator.click_allbooks).click()
    
})

And("Input bookname 'ব্লাড পেইন্টিং' on search Bar", function() {
    cy.xpath(locator.send_searchopt).type(data.BOOKNAME)
    
})

And("Click on search Button", function() {
    cy.xpath(locator.click_searchopt).click()
    
})

And("Click on Book", function() {
    cy.xpath(locator.click_book).click()
    
})

And("Click on Add_to_Cart button", function() {
    cy.xpath(locator.click_addtocart).click()
    
})

And("Click on Cart Icon", function() {
    cy.xpath(locator.click_cart).click()
    
})

And("Click on delete Icon", function() {
    cy.xpath(locator.click_deletecart).click()
    
})

And("Click on facebook Icon", function() {

    cy.scrollTo('bottom')
    cy.xpath(locator.click_facebookicon).click()
    cy.wait(5000)
    cy.go('back')
    
})

And("Click on youtube Icon", function() {

    cy.scrollTo('bottom')
    cy.xpath(locator.click_youtubeicon).click()
    cy.wait(5000)
    cy.go('back')
    
})

And("Click on playstore Icon", function() {

    cy.xpath(locator.click_playstoreicon).click()
    cy.wait(5000)
    cy.go('back')
    
})

And("Click on help button", function() {

    cy.xpath(locator.click_helpbutton).click()
    cy.wait(5000)
    cy.go('back')
    
})











