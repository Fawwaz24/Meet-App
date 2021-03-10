import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";
import { InfoAlert } from './Alert';
import EventGenre from './EventGenre';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {

  state = {
    events: [],
    locations: [],
    eventCount: 32
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(' ').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location, eventCount) => {
    let locationEvents;
    getEvents().then((events) => {
      locationEvents = events;
      if (location === 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventCount === 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventCount > 0) {
        locationEvents = events.slice(0, eventCount);
      }
      this.setState({
        events: locationEvents,
        eventCount,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;

    // Try to load localEvent
    if (!navigator.onLine) {
      this.setState({
        infoAlert:
          'You are not connected from internet(data may not be up to date)',
      });
    } else {
      this.setState({
        infoAlert: '',
      });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.eventCount),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {

    const data = [
      { city: 'Dubai', number: 2 },
      { city: 'Toronto', number: 2 },
      { city: 'Santiago', number: 3 },
      { city: 'Tokyo', number: 2 },
    ];

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          eventCount={this.state.eventCount}
        />
        <NumberOfEvents
          eventCount={this.state.eventCount}
          updateEvents={this.updateEvents}
        />

        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type='category' dataKey='city' name='city' />
              <YAxis
                allowDecimals={false}
                type='number'
                dataKey='number'
                name='number of events'
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter
                data={
                  !window.location.href.startsWith('http://localhost')
                    ? this.getData()
                    : data
                }
                fill='#8884d8'
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <InfoAlert text={this.state.infoAlert} />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;