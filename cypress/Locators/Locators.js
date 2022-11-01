class locatorsPage{

    // url="https://khatabook.com/";
    // url="https://sheiboi.com/";

    // login
    // register = "//a[@id='login2']"
    click_login_icon = ("//img[@src='/Resources/images/login.png']")
    click_login_button = ("//a[@id='loginLink']")
    textbox_username_xpath = ("//input[@type='email']")
    textbox_password1_xpath = ("(//input[@type=\"text\"])[2]")
    textbox_password2_xpath = ("//input[@id=\"Password\"]")
    button_login_xpath = ("//input[@value='লগইন করুন']")

    button_logout_xpath = ("//img[@src='/Resources/images/login.png']")
    logout_link_xpath = ("//a[@id='logOut']")

    click_homepage = ("//a[contains(text(),'হোম')]")
    click_subjectPage = ("//a[@href='/Category/All']")
    click_writer = ('/html[1]/body[1]/div[2]/section[1]/section[1]/section[1]/section[2]/ul[1]/li[3]/a[1]')
    click_allbooks = ("//ul[@class='top-nav']//a[contains(text(),'সব বই')]")
    send_searchopt = ("//input[@id='search-text']")
    click_searchopt = ("//button[@id='topSearch']")
    click_book = ("//span[@class='title']//a[contains(text(),'ব্লাড পেইন্টিং')]")
    click_addtocart = ("//a[contains(text(),'+ কার্ট-এ যোগ করুন')]")
    click_cart = ("//span[@id='cart-count']")
    click_deletecart = ("//i[@class='icon-trash']")


    click_facebookicon = ("//a[@id='social_facebook']")
    click_twittericon = ("//a[@id='social_twitter']")
    click_youtubeicon = ("//a[@id='social_youtube']")
    click_playstoreicon = ("//a[@href='https://play.google.com/store/apps/details?id=raven.reader']")
    click_helpbutton = ("//a[contains(text(),'সাহায্য')]")

}

export default locatorsPage;
