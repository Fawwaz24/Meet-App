Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the main page is open and the user hasn’t specified a number in the “Number of Events” field
When the user opens the event page
Then the user must view 32 events listed on the page by default.

Scenario: User can change the number of events they want to see
Given can change number of lists to view
When the user opens the event page
Then the user can change or type on the input box any number of list of events to view.