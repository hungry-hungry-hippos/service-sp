import React from 'react';
import styles from '../../dist/style.css';

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RestaurantListEntry = ({restaurant}) => (
  <div
    className='restaurant-list-entry'>
    <div
      className='restaurant-list-entry-name'>
      Restaurant: {restaurant.name}
    </div>
    <div
      className='restaurant-list-entry-tags'>
      Tags: {restaurant.tag.cuisine}, {' '}
            {restaurant.tag.location}, {' '}
            {restaurant.tag.cost}
    </div>
    <div
      className='restaurant-list-entry-logo-zagat'>
      {<img
        src={restaurant.rating.logo[0]}
      />}
    </div>
    <div
      className='restaurant-list-entry-rating-zagat'>
      Zagat Rated: {restaurant.rating.zagat}
    </div>
    <div
      className='restaurant-list-entry-logo-google'>
      {<img
        src={restaurant.rating.logo[1]}
      />}
    </div>
    <div
      className='restaurant-list-entry-rating-google'>
      Google Rated: {restaurant.rating.google}
    </div>
    <div
      className='restaurant-list-entry-image'>
      {restaurant.image.map(pic => (
        <img
          key={getRandomInclusive(101, 3000)}
          src={pic}
        />
      ))}
    </div>
  </div>
)

export default RestaurantListEntry;