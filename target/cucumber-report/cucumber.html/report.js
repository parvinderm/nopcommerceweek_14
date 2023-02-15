$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I should be able to login and logout with valid credentials",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15777418499,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User verify The Welcome, Please Sign In! message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 863508400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 1720703100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 321927400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userVerifyTheWelcomePleaseSignInMessageDisplay()"
});
formatter.result({
  "duration": 165540700,
  "status": "passed"
});
formatter.after({
  "duration": 223100,
  "status": "passed"
});
formatter.before({
  "duration": 6290120800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter email \"jennypatel1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User verify the Log out link text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 1357415501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennypatel1@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 269303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 211133001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1517644001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userVerifyTheLogOutLinkText(String)"
});
formatter.result({
  "duration": 617200,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.LoginSteps.userVerifyTheLogOutLinkText(String) in file:/C:/Homework/nopcommerceweek_14/target/test-classes/\u0027 with pattern [^User verify the Log out link text$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User verify the Log out link text\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2924686100,
  "status": "passed"
});
formatter.before({
  "duration": 8797470100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the error message with Invalid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enter email \"sonapate@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter password \"rdht\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 2218933500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonapate@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 429638600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rdht",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 361599500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1296963399,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 790000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.LoginSteps.userShouldSeeTheErrorMessage(String) in file:/C:/Homework/nopcommerceweek_14/target/test-classes/\u0027 with pattern [^User should see the error message$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should see the error message\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1234294999,
  "status": "passed"
});
formatter.before({
  "duration": 11583602800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that user should logout Successfully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User  click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter email \"jennypatel1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User  click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on Log Out Link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should verify that login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnHomepage()"
});
formatter.result({
  "duration": 223600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginLink()"
});
formatter.result({
  "duration": 1965880501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennypatel1@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 422953100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 432915600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 2091550600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLogOutLink()"
});
formatter.result({
  "duration": 1393782100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldVerifyThatLoginLinkDisplay(String)"
});
formatter.result({
  "duration": 328099,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.LoginSteps.userShouldVerifyThatLoginLinkDisplay(String) in file:/C:/Homework/nopcommerceweek_14/target/test-classes/\u0027 with pattern [^User should verify that login link display$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User should verify that login link display\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3894765800,
  "status": "passed"
});
});