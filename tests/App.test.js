import React from 'react';
import 'isomorphic-fetch';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';

import './setup.js';

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