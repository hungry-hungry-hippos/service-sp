const express = require('express');
const port = 3010;
let path = require('path');

let app = express();
let pathToAssets = path.join(__dirname, '../client/dist');

const staticAssets = express.static(pathToAssets);

app.use(staticAssets);

app.get('/', (req, res) =>
  res.send('Ok')
);

app.listen(port, () => 
  console.log(`listening on port ${port}`)
);
