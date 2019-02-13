import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';

import App from './App.jsx';

import '../../../tests/setup.js';
import RestaurantList from './RestaurantList';
import { wrap } from 'module';

describe('App component', () => {
  it('starts with a loadState of false', () => {
    const wrapper = shallow(<App />);
    const loadState = wrapper.state().isLoaded;
    expect(loadState).toEqual(false);
  });
  it('starts with an empty data array', () => {
    const wrapper = shallow(<App />);
    const dataState = wrapper.state().data;
    expect(dataState).toEqual([]);
  });
});