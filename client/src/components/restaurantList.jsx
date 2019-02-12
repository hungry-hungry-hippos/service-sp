import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';

const RestaurantList = ({restaurants}) => (
  <div>
  <div
    className='restaurant-list-title'>
    More Japanese Near Izakaya Sozai
  </div>
  <div
    className='restaurant-list'>
    {restaurants.map(restaurant => (
      <RestaurantListEntry
        key={restaurant.id}
        restaurant={restaurant}
      />
    ))}
  </div>
  </div>
);

export default RestaurantList;