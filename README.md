# meet-app



This app is a serverless, progressive web application (PWA) using React and a test-driven development (TDD) technique. 
The application uses the Google Calendar API to fetch upcoming events.



FEATURE 1: FILTER EVENTS BY CITY
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Scenario 2: User should see a list of suggestions when they search for a city.
Scenario 3: User can select a city from the suggested list.

As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city



FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
Scenario 1: An event element is collapsed by default
Scenario 2: User can expand an event to see its details
Scenario 3: User can collapse an event to hide its details

As a user
I should be able to “show and hide the events detail”
So that I have an option to expand or collapse the detail information of an event

SCENARIO 1: An event element is collapsed by default 
Given event detail is collapsed
When the user opens the event details
Then the user can expand the event detail anytime.
 
SCENARIO 2: User can expand an event to see its details
Given the event detail is hidden
When user click the event 
Then the user should see a detailed information about the event.

SCENARIO 3: User can collapse an event to hide its details.
Given the event detail is hidden
When the user clicks the collapse button or the event itself.
Then the event element will be collapsed to see the detail information about that specific event



FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Scenario 2: User can change the number of events they want to see.

As a user
I should be able to “specify the number of events”
So that I have a choice to view how many numbers of event I want to display.

SCENARIO 1: When user hasn’t specified a number, 32 is the default number
Given the main page is open and the user hasn’t specified a number in the “Number of Events” field
When the user opens the event page
Then the user must view 32 events listed on the page by default.

SCENARIO 2: User can change the number of events they want to see
Given can change number of lists to view
When the user opens the event page
Then the user can change or type on the input box any number of list of events to view.



FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes the settings (city, time range).

As a user
I should be able to “use the app when offline”
So that I can access the application without the internet.

SCENARIO 1: Show cached data when there’s no internet connection
Given show cached data without internet connection
When the user opens the application
Then the user can view the data saved in the cached.

SCENARIO 2: Show error when user changes the settings (city, time range)
Given show an error when settings change
When the user changes any settings (city, time range)
Then the app will show an error to the user that you must connect to internet, before changing the settings



FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.

As a user
I should be able to “visualize the data of events”
So that I have the means to explore the data and uncover deep insights.

SCENARIO 1: Show a chart with the number of upcoming events in each city.
Given Show a chart with the number of upcoming events in each city
When the user goes to data visualization page 
Then the app will show a graph or chart that have the number of events of the city.
