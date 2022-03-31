const express = require('express');

const restaurantsDB = require('./restaurant-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const restaurants = await restaurantsDB.find(req.query);
      res.status(200).json(restaurants);
    } catch(err) {
      res.status(500).json({ message: 'Failed to get restaurants' });
    }
});

// Get Single restaurant
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.findById(req.params.id);
        if(restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get restaurant' });
    }
});

// Get restaurant by owner id
router.get('/owner/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.findByOwner(req.params.id);
        if(restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get restaurant' });
    }
});


// Add restaurant
router.post('/', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.add(req.body);
        res.status(201).json(restaurant);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add restaurant' });
    }
});

// Update restaurant
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.update(req.params.id, req.body);
        if(restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update restaurant' });
    }
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.remove(req.params.id);
        if(restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete restaurant' });
    }
});

module.exports = router;
