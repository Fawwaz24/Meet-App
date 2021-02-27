import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventCount: this.props.eventCount,
    };

    handleEventInputChanged = (event) => {
        const eventCount = event.target.value;
        this.setState({
            eventCount,
        });
        this.props.updateEvents('', eventCount);
    };

    render() {
        return (
            <div className='event-number'>
                <label htmlFor='numberOfEvent'>Number of Events</label>
                <input
                    type='number'
                    name='numberOfEvent'
                    className='event-number-input'
                    placeholder='Enter Number of Events'
                    value={this.state.eventCount}
                    onChange={this.handleEventInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;