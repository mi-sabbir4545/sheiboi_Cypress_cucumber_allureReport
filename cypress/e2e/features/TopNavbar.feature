Feature: sheiboi Website Automation Testing

    Background: TopNavbar sheiboi Website
        Given Open sheiboi website

    Scenario: Check all menu from TopNavbar
        When Click On The Home page
        And Click On subject page
        And Click On the writer page
        And Click On the all books page
        And Input bookname 'ব্লাড পেইন্টিং' on search Bar
        And Click on search Button
        And Click on Book
        And Click on Add_to_Cart button
        And Click on Cart Icon
        And Click on delete Icon