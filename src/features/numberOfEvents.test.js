import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/numberOfEvents.feature');

let NumberOfEventsWrapper;

defineFeature(feature, (test) => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

        let AppWrapper;
        given('the main page is open and the user hasn’t specified a number in the “Number of Events” field', () => {

        });

        when('the user opens the event page', () => {
            AppWrapper = mount(<App />);
        });

        then(/^the user must view (\d+) events listed on the page by default$/, (arg0) => {
            AppWrapper.update();
            expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {

        given('can change number of lists to view', () => {
            NumberOfEventsWrapper = shallow(
                <NumberOfEvents updateEvents={() => { }} />
            );
        });

        when('the user opens the event page', () => {
            const eventCount = { target: { value: 5 } };
            NumberOfEventsWrapper.find('.event-number-input').simulate(
                'change',
                eventCount
            );
        });

        then('the user can change or type on the input box any number of list of events to view.', () => {
            expect(NumberOfEventsWrapper.state('eventCount')).toBe(5);
        });
    });
});