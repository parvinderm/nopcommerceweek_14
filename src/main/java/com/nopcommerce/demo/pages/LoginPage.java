package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;


    @FindBy(id = "Email")
    WebElement emailField;


    @FindBy(name = "Password")
    WebElement passwordField;


    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;


    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement LogOut;
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement LogInLink;



    public String getWelcomeText() {
        String message = getTextFromElement(welcomeText);
        log.info("getting text from : " + welcomeText.toString());
        return message;
    }

    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
    }

    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
    }
    public  String  userVerifyTheLogoutLinkText(String text){
        return getTextFromElement(LogOut);
    }
    public String getLogInText(){
        return getTextFromElement(LogInLink);
    }


}


