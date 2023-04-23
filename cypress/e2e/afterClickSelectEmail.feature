Feature: Test to make sure we can select email addresses after a click

  Scenario: Identify the correct button which opens emails, then I select them
    Given Our desired web app is open
    When I click the field
    Then I am presented with several email addresses
    Then I can select those email addresses