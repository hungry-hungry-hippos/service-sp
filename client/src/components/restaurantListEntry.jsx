import React from 'react';
import styles from '../../dist/style.css';
import ImageCarousel from './ImageCarousel.jsx';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RestaurantListEntry = ({restaurant}) => (
  <div
    className={styles.allRestaurantsContainer}>
    <div
      className={styles.eachRestaurantContainer}>
      <div>
        <ImageCarousel
          images={restaurant}
        />
      </div>
      <div
        className={styles.restaurantDetailsContainer}>
        <div
          className={styles.restaurantName}>
          Restaurant: {restaurant.name}
        </div>
        <div
          className='restaurant-list-entry-tags'>
          Tags: {restaurant.tag.cuisine}, {' '}
                {restaurant.tag.location}, {' '}
                {restaurant.tag.cost}
        </div>
        <div
          className={styles.zagatLogoContainer}>
          {<img
            className={styles.zagatLogo}
            src={restaurant.rating.logo[0]}
          />}
        </div>
        <div
          className='restaurant-list-entry-rating-zagat'>
          Zagat Rated: {restaurant.rating.zagat}
        </div>
        <div
          className={styles.googleLogoContainer}>
          {<img
            className={styles.googleLogo}
            src={restaurant.rating.logo[1]}
          />}
        </div>
        <div
          className='restaurant-list-entry-rating-google'>
          Google Rated: {restaurant.rating.google}
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantListEntry;