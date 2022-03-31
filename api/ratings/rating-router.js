const express = require('express');

const ratingsDB = require('./rating-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ratings = await ratingsDB.find(req.query);
      res.status(200).json(ratings);
    } catch(err) {
      res.status(500).json({ message: 'Failed to get ratings' });
    }
});

// Get Single rating
router.get('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.findById(req.params.id);
        if(rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get rating' });
    }
});

// Add rating
router.post('/', async (req, res) => {
    try {
        const rating = await ratingsDB.add(req.body);
        res.status(201).json(rating);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add rating' });
    }
});

// Update rating
router.put('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.update(req.params.id, req.body);
        if(rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update rating' });
    }
});

// Delete rating
router.delete('/:id', async (req, res) => {
    try {
        const rating = await ratingsDB.remove(req.params.id);
        if(rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete rating' });
    }
});

module.exports = router;
