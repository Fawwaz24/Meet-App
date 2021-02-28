Feature: Show/hide and events details

Scenario: An event element is collapsed by default 
Given event detail is collapsed
When the user opens the event details
Then the user can expand the event detail anytime.
 
Scenario: User can expand an event to see its details
Given the event detail is hidden
When user click the event 
Then the user should see a detailed information about the event.

Scenario: User can collapse an event to hide its details.
Given the event detail is hidden
When the user clicks the collapse button or the event itself.
Then the event element will be collapsed to see the detail information about that specific event