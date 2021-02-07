@smoke

Feature: Heder on trainig.by

@headerHeight
Scenario: Get header Height
  Given I open "https://www.training.by/" url
  Then Header height should be "68px"
  When I wait "3" seconds

@HeaderWidth
Scenario: Get header Width
  Given I open "https://www.training.by/" url
  Then Header width should be "1903px"
  When I wait "3" seconds