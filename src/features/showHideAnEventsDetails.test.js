import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
import { extractEvents } from '../api';
import { loadFeature, defineFeature } from 'jest-cucumber';

const events1 = extractEvents(mockData);
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let EventsWrappper;

defineFeature(feature, (test) => {

    test('An event element is collapsed by default', ({ given, when, then }) => {

        let AppWrapper;
        given('event detail is collapsed', async () => {
            AppWrapper = mount(<App />);
        });

        when('the user opens the application', () => {
            const AppEventsState = AppWrapper.state('events');
            expect(AppEventsState).toBeTruthy();
        });

        then('the user can expand the event detail anytime', () => {
            EventsWrappper = shallow(<Event event={{ events1 }} />);
            expect(EventsWrappper.find('show-hide-btn')).toBeTruthy();
        });
    });

    test('User can expand an event to see its details', ({ given, when, then, }) => {

        given('the event detail is true', () => {
            EventsWrappper.setState({
                showhideDetails: true,
            });
        });

        when('user click the event', () => {
            EventsWrappper.find('.show-hide-btn').simulate('click');
        });

        then('the user should see a detailed information about the event.', () => {
            const eventDetails = EventsWrappper.find('.event-details');
            expect(eventDetails).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then, }) => {

        given('the event detail is hidden', () => {
            EventsWrappper.setState({
                showhideDetails: false,
            });
        });

        when('the user clicks the collapse button.', () => {
            EventsWrappper.find('.show-hide-btn').simulate('click');
        });

        then('the event element will be collapsed to hide the detail information about that specific event', () => {
            const eventDetails = EventsWrappper.find('.event-details');
            expect(eventDetails).toHaveLength(0);
        });
    });
});