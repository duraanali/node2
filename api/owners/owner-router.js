const express = require('express');

const ownersDB = require('./owner-model.js');
const { requiredName } = require('../middleware/middleware.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const owners = await ownersDB.find(req.query);
      res.status(200).json(owners);
    } catch(err) {
      res.status(500).json({ message: 'Failed to get owners' });
    }
});

// Get Single Owner
router.get('/:id', async (req, res) => {
    try {
        const owner = await ownersDB.findById(req.params.id);
        if(owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'Owner not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to get owner' });
    }
});

// Add Owner
router.post('/', requiredName, async (req, res) => {
    try {
        const owner = await ownersDB.add(req.body);
        res.status(201).json(owner);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add owner' });
    }
});

// Update Owner
router.put('/:id', requiredName, async (req, res) => {
    try {
        const owner = await ownersDB.update(req.params.id, req.body);
        if(owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'Owner not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to update owner' });
    }
});

// Delete Owner
router.delete('/:id', async (req, res) => {
    try {
        const owner = await ownersDB.remove(req.params.id);
        if(owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'Owner not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete owner' });
    }
});

module.exports = router;
