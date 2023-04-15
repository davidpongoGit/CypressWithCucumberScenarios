Feature: Test to make sure that we are not interacting with cached DOM

  Background: Some applications use DOM caching techniques.
              For example, if a user follows a multi step process and each step requires filling data into a form
              then forms may be cached at the client side along the way. It allows to quickly navigate back and forward
              through the steps without requesting data from a server. When form is cached it just pushed on-top
              of z-order stack. It means that an element may be still present in the DOM tree but overlapped with
              another layer of elements. In this case it is important that a test does not interact with inactive
              elements because they are invisible to a user.

  Scenario: Click the button and then again but only if button colour is green
    Given Hidden Layers Page is displayed
    When I find the green button
    And I click the green button
    Then I clicked the button again only if its green