const _ = require('lodash');
const { Restaurant } = require('./schema.js');
const { db } = require('./index.js');

// Fake Data
const fakeImages = [
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/food-salad-healthy-lunch.jpg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-1683545.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-461198.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-461271.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-629093.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-675951.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-699544.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-699953.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-704569.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-70497.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-769289.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-836850.jpeg', 
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/pexels-photo-955137.jpeg',
  'https://s3-us-west-1.amazonaws.com/zagarette-dummy-data/salmon-dish-food-meal-46239.jpeg'
];

const fakeCuisine = [
  'Japanese',
  'Korean',
  'Chinese',
  'American (New)',
  'Mediterranean',
  'Indian',
  'Polish'
];

const fakeLocation = [
  'Inner Sunset',
  'Nob Hill',
  'Chinatown',
  'FiDi',
  'Mission',
  'Castro',
  'Presidio',
  'Tenderloin'
];

const fakeCost = [
  '$',
  '$$',
  '$$$',
  '$$$$'
];

const fakeName = [
  'E & J',
  'Super Duper',
  'Marufuku Ramen',
  'Farmhouse',
  'Mensho Tokyo',
  'Tacorea',
  'Kitchen Story',
  'Box Kitchen',
  'Golden Boy Pizza',
  'Brenda\'s French Soul Food',
  'Burma Superstar',
  'The Front Porch',
  'The Bird',
  'Chubby Noodle',
  'Palm House',
  'SoMa StrEat',
  'HRD',
  'Fondue Cowboy',
  'Straw',
  'Liholiho Yacht Club',
  'Tataki',
  'Thanh Long',
  'Zero Zero',
  'Barrel Head BrewHouse',
  'Sushirrito',
  'Hog Island Oyster Co',
  'Dumpling Time'
];

// Helper function for random integer 
// between two values, inclusive
const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to pick random number
const randomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Generate random links random number of times
const randomFakeImages = () => {
  return _.sampleSize(fakeImages, getRandomInclusive(1, fakeImages.length));
};

// Generate random rating
const randomRating = () => {
  return Number(randomNum(4, 5).toFixed(1));
};

// Generate random cuisine
const randomCuisine = () => {
  return fakeCuisine[getRandomInclusive(0, fakeCuisine.length - 1)];
};

// Generate random location
const randomLocation = () => {
  return fakeLocation[getRandomInclusive(0, fakeLocation.length - 1)];
};

// Generate random cost
const randomCost = () => {
  return fakeCost[getRandomInclusive(0, fakeCost.length - 1)];
};

// Generate random restaurant name
const randomName = () => {
  return fakeName[getRandomInclusive(0, fakeName.length - 1)];
};

const mainRestaurant = new Restaurant({
  id: 1,
  name: 'Izakaya Sozai',
  image: randomFakeImages(),
  tag: {
    cuisine: 'Japanese',
    location: 'Inner Sunset',
    cost: '$'
  },
  rating: {
    zagat: 4.5,
    google: 4.4
  }
});

const save = () => {
  mainRestaurant.save(err => {
    return err ?
    console.log('error: failed to save main restaurant') :
    console.log('success: saved main restaurant')
  });

  for (var i = 2; i < 101; i++) {
    const fakeRestaurants = new Restaurant({
      id: i,
      name: randomName(),
      image: randomFakeImages(),
      tag: {
        cuisine: randomCuisine(),
        location: randomLocation(),
        cost: randomCost()
      },
      rating: {
        zagat: randomRating(),
        google: randomRating()
      }
    });
    
    fakeRestaurants.save(err => {
      return err ?
      console.log('error: failed to save fake restaurants') :
      console.log('success: saved fake restaurants')
    });
  }
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  save();
});