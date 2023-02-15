import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepss {
    @Given("^User on homepage$")
    public void userOnHomepage() {
    }

    @When("^User  click on login link$")
    public void userClickOnLoginLink() {
    }

    @Then("^User should navigate to login page successfully$")
    public void userShouldNavigateToLoginPageSuccessfully() {
    }

    @And("^User verify The Welcome, Please Sign In! message display$")
    public void userVerifyTheWelcomePleaseSignInMessageDisplay() {
    }

    @And("^User enter email \"([^\"]*)\"$")
    public void userEnterEmail(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User  click on login button$")
    public void userClickOnLoginButton() {
    }

    @Then("^User verify the Log out link display$")
    public void userVerifyTheLogOutLinkDisplay() {
    }

    @Then("^User should verify the error message display$")
    public void userShouldVerifyTheErrorMessageDisplay() {
    }

    @And("^User click on Log Out Link$")
    public void userClickOnLogOutLink() {
    }

    @Then("^User should verify that login link display$")
    public void userShouldVerifyThatLoginLinkDisplay() {
    }
}
