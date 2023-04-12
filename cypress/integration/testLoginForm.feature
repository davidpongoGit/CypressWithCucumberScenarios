Feature: Testing all valid and invalid login permutations

  Background: This test uses Scenario Outline to efficiently loop through all possible
              test cases to achieve 100% test coverage in valid and invalid login attempts.

    Scenario Outline:
      Given login form is displayed
      When "<username>" has been entered
      And "<password>" is entered
      Then user has successfully logged in using "<username>" with "<password>"
      Examples:
        | username                | password       |
        | standard_user           | secret_sauce   |
        | locked_out_user         | secret_sauce   |
        | problem_user            | secret_sauce   |
        | performance_glitch_user | secret_sauce   |
        | standard_user           | wrong_password |
        | locked_out_user         | wrong_password |
        | problem_user            | wrong_password |
        | performance_glitch_user | wrong_password |
        | wrong_user              | secret_sauce   |