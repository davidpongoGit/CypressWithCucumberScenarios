Feature: Test to make sure that ID is not used for button identification

  Background: Modern applications often generate dynamic IDs for elements.
              In this case ID is not a reliable attribute for using in element selector.
              By default many UI automation tools record IDs and this results in tests broken from the very beginning.
              An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element.

    Scenario: Identify button, click it, refresh screen and click again
      Given Dynamic ID Page is displayed
      When I identify the button
      Then I click the button
      When I refresh the page
      Then Button can be clicked again using the same identification