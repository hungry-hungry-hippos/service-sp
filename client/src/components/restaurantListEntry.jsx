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
          {restaurant.name}
        </div>
        <div
          className={styles.restaurantTags}>
          {restaurant.tag.cuisine} 
          {' '} 
          <span>&#183;</span>
          {' '}
          {restaurant.tag.location}
          {' '} 
          <span>&#183;</span>
          {' '}
          {restaurant.tag.cost}
        </div>
        <div
          className={styles.logoContainer}>
          {<img
            className={styles.zagatLogo}
            src={restaurant.rating.logo[0]}
          />}
          <div
            className='restaurant-list-entry-rating-zagat'>
            {restaurant.rating.zagat}
          </div>
          <span>&#124;</span>
          {<img
            className={styles.googleLogo}
            src={restaurant.rating.logo[1]}
          />}
          <div
            className='restaurant-list-entry-rating-google'>
            {restaurant.rating.google}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantListEntry;