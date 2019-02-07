// import the mongoose module
var mongoose = require('mongoose');

// set up default mongoose connection
var mongoDB = 'mongodb://localhost:3030/more-restaurants':
mongoose.connect(mongoDB);

// get mongoose to use the
// global promise library
mongoose.Promise(global.Promise);

// get the default connection
var db = mongoose.connection;

// bind connection to error event
// to get notification of connection
// errors
db.on('error', console.error.bind(console, 'mongodb connection error:'));

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

var MoreRestaurants = mongoose.model('MoreRestaurants', MoreRestaurantsSchema);
