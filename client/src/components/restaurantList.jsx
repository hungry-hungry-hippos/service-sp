import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';

const RestaurantList = ({restaurants}) => (
  <div 
    className='restaurant-list'>
    {restaurants.map(restaurant => (
      <RestaurantListEntry
        key={restaurant.id}
        restaurant={restaurant}
      />
    ))}
  </div>
);

export default RestaurantList;