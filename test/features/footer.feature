@smoke
Feature: Footer Size
@footer

Scenario Outline: Footer height <URL>
  Given I open "<URL>" url
  Then Footer height should be "<height>"
  When I wait "3" seconds

  Examples:
  | URL                                         | height     |
  | https://www.training.by/                    | 85px       |
  | https://www.training.by/#!/About?lang=ru    | 85px       |