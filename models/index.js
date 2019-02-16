const _ = require('lodash');
const mongoose = require('mongoose');
const { Restaurant } = require('./schema.js');
mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true });
const db = mongoose.connection;

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const defaultRestaurants = (id, callback) => {
  Restaurant
    .aggregate([
      {$match: 
        {id: 
          {$ne: 1}}
      },
      {$sample: 
        {size: getRandomInclusive(1, 6)}
      }
    ])
    .exec((err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
};

module.exports = {
  db,
  defaultRestaurants
};
