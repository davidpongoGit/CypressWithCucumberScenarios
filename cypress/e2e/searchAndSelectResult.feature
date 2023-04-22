Feature: Search for an item on Amazon

  Scenario: Test we can can input something into search field and select it
    Given amazon website is open
    When we search for a book
    Then results are displayed
    When we click on one of the results
    Then we are taken onto the item page