import React, { Component } from 'react';
import restaurantList from './restaurantList.jsx';

const API_URL = 'http://localhost:3010/api/restaurants/1';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
      <div
        className='restaurants'>
        <ul>
        {console.log(data)}
          {data.map(restaurant => (
            <p
              key={restaurant.id}>
              {restaurant.name}

              <br/>
              {restaurant.image.map(pic => (
                <img
                  key={getRandomInclusive(101, 3000)}
                  src={pic}
                />
              ))}
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;