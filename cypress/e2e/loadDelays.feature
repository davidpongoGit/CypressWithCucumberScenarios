Feature: Test must be able to patiently wait for page loaded event from a browser

  Background: Server response may often come with an unpredictable delay. Navigate to Home page and record Load Delays
              link click and button click on this page. It should wait until page is loaded.

  Scenario: Click on the Load Delays page and wait until it loads then click a button
    Given Home page is displayed
    When I click on Load Delays page link
    Then I wait until the page loads
    And I click the button on that page