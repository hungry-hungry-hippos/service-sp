// import the mongoose module
const mongoose = require('mongoose');

// define a schema
const MoreRestaurantsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: Array,
  tag: {
    cuisine: String,
    location: String,
    cost: String
  },
  rating: {
    zagat: Number,
    google: Number
  }
});

const Restaurant = mongoose.model('restaurants', MoreRestaurantsSchema);

module.exports = {
  Restaurant
}