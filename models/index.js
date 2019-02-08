// import the mongoose module
var mongoose = require('mongoose');

// define a schema
var Schema = mongoose.Schema;

var MoreRestaurantsSchema = new Schema({
  id: Number,
  image: [String],
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

// Export the model
module.exports = mongoose.model('MoreRestaurants', MoreRestaurantsSchema);