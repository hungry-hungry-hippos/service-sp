import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
import styles from '../../dist/style.css';

const RestaurantList = ({restaurants}) => (
  <div>
  <div
    className={styles.title}>
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