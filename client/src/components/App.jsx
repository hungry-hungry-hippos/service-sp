import React, { Component } from 'react';
import RestaurantList from './RestaurantList.jsx';
import styles from '../../dist/style.css';

const API_URL = 'http://localhost:3010/api/restaurants/1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    }
  }

  componentDidMount() {
    fetch(API_URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        data: json,
      });
    });
  }

  render() {
    let { isLoaded, data } = this.state;
    if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <div
          className='restaurants'>
          <RestaurantList
            restaurants={data}
          />
        </div>
      </div>
    );
  }
}

export default App;