import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';

import App from './App.jsx';

import '../../../tests/setup.js';
import RestaurantList from './RestaurantList';

describe('App component', () => {
  it('starts with a loadState of false', () => {
    const wrapper = shallow(<App />);
    const loadState = wrapper.state().isLoaded;
    expect(loadState).toEqual(false);
  });
});