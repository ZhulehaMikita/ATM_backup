@smoke
Feature: Homepage verification 

Scenario Outline: Verification of different tabs on the homepage
    Given User is on "Homepage" page
    Then "Homepage" should be opened
    And User is located on "Federal Tab" tab
    And User sees "Federal Tax Widget"

    When User clicks on "<Tab>"
    Then Current url should include "<Text>"

Examples:
    | Tab               | Text          |
    | State Tab         | state         |
    | International Tab | international |
    | Tax News          | tax-news      |
    | All               | all           |



Scenario: Verificarion of 'All Federal Tax' link
    Given User is on "Homepage" page
    Then "Homepage" should be opened
    And User is located on "Federal Tab" tab
    And User sees "Federal Tax Widget"

    When User clicks on "All Federal Tax"
    Then "Federal Tax Page" should be opened
    And User sees "Federal Tax page title"
    And User sees "Income Taxes link"
    And User sees "Highlighted sections" 

@debug
Scenario: CCH Tax Briefings link verification 
    Given User is on "Homepage" page
    Then "Homepage" should be opened
    And User is located on "Federal Tab" tab
    And User sees "Federal Tax Widget"

    When User clicks on "All CCH Tax Briefings"
    Then "Tax News page" should be opened
    And User sees "Tax News header"
