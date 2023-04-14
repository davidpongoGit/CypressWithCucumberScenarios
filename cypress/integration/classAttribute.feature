Feature: Test to make sure that correct button is identified and alert box closed

  Background: Class attribute of an element may contain more than one class reference.
              XPath selector relying on a class must be well formed.
              Execute the test to make sure that it can identify the button using btn-primary class.

  Scenario: Identify the correct button, click it, confirm and close pop alert.
    Given Class Attribute Page is displayed
    When I identify the blue button
    And I click the blue button
    Then Pop up alert box is displayed
    And I confirm the alert box