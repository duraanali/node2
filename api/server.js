const express = require('express'); 

const  onwerRouter = require('./owners/owner-router.js');
const ratingRouter = require('./ratings/rating-router.js');
const restaurantRouter = require('./restaurants/restaurant-router.js');

const server = express();
server.use(express.json());


server.use('/api/owners', onwerRouter);
server.use('/api/ratings', ratingRouter);
server.use('/api/restaurants', restaurantRouter);


server.use('*', (req, res) => {
  // catch all 404 errors middleware
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;
