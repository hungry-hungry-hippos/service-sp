import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
import styles from '../../dist/style.css';

const RestaurantList = ({restaurants}) => (
  <div
    className={styles.horizontalLine}>
    <div
      className={styles.restaurantTitle}>
      More Japanese Near Izakaya Sozai
    </div>
    <div
      className='restaurants'>
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