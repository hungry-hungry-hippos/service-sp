const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('../routes/index.js');
const restaurantsRouter = require('../routes/restaurants.js');
const path = require('path');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://sparksparker:test123@ds225205.mlab.com:25205/restaurants-test'
mongoose.connect(mongoDB, { useNewUrlParser: true} );
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 3010;

const app = express();
// let pathToAssets = path.join(__dirname, '../client/dist');

// const staticAssets = express.static(pathToAssets);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/restaurants', restaurantsRouter);

// app.get('/', (req, res) =>
//   res.send('Ok')
// );

app.listen(port, () => 
  console.log(`listening on port ${port}`)
);