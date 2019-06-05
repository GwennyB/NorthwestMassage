'use strict';

// application dependencies
const express = require('express');
const cors = require('cors');

// application constants
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

// establish static directory
app.use(express.static('./public'));

// create home route
app.get('/home', (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});




// open port and write status to console
app.listen(PORT, () => {
  console.log(`port ${PORT} open`);
});