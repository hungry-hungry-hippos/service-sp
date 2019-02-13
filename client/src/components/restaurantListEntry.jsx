import React from 'react';
import styles from '../../dist/style.css';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RestaurantListEntry = ({restaurant}) => (
  <div
    className={styles.restaurantList}>
    <div
      className={styles.eachRestaurant}>
      <div
        className={styles.restaurantName}>
        Restaurant: {restaurant.name}
      </div>
      <div
        className={styles.slideshowContainer}>
        <div
          className={styles.restaurantImage}>
        </div>
      </div>
    </div>
    <div
      className='restaurant-list-entry-tags'>
      Tags: {restaurant.tag.cuisine}, {' '}
            {restaurant.tag.location}, {' '}
            {restaurant.tag.cost}
    </div>
    <div
      className={styles.zagatLogo}>
      {<img
        src={restaurant.rating.logo[0]}
      />}
    </div>
    <div
      className='restaurant-list-entry-rating-zagat'>
      Zagat Rated: {restaurant.rating.zagat}
    </div>
    <div
      className={styles.googleLogo}>
      {<img
        src={restaurant.rating.logo[1]}
      />}
    </div>
    <div
      className='restaurant-list-entry-rating-google'>
      Google Rated: {restaurant.rating.google}
    </div>
  </div>
);

export default RestaurantListEntry;