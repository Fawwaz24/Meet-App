import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

    let EventWrapper, event;

    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });

    test('render correct event details', () => {
        expect(EventWrapper.find('.event-container')).toHaveLength(1);
    });

    test('render show event-details', () => {
        EventWrapper.setState({ showhideDetails: true });
        EventWrapper.find('.show-hide-btn').simulate('click');
    });

    test('render hide event-details', () => {
        EventWrapper.setState({ showhideDetails: false });
        EventWrapper.find('.show-hide-btn').simulate('click');
    });

});