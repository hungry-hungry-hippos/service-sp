const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { defaultRestaurants } = require('../models/index.js');
const app = express();
const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssets = express.static(pathToAssets);
const port = process.env.PORT || 3010;

app.use(staticAssets);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('app.get working');
});

app.get('/api/restaurants/:id', (req, res) => {
  let id = req.params.id;
  defaultRestaurants(id, (err, data) => {
    return err ?
    res.sendStatus(400) :
    res.send(data);
  });
});

app.listen(port, () => 
  console.log(`listening on port ${port}`)
);
