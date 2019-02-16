import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
import styles from '../../dist/style.css';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let id = 2000;

const RestaurantList = ({restaurants}) => (
  <div
    className={styles.componentContainer}>
    <div
      className={styles.topBorder}>
    </div>
    <div
      className={styles.headerContainer}>
      <div
        className={styles.moreRestaurantsHeader}>
        More Japanese Near Izakaya Sozai
      </div>
    </div>
    {restaurants.map(restaurant => (
      <RestaurantListEntry
        key={id++}
        restaurant={restaurant}
      />
    ))}
  </div>
);

export default RestaurantList;