import { Router } from 'express';
import { createNewRestaurant } from '../controllers/restaurantController';

// instance of router
const router = Router();

// GET all workouts
router.get('/', (_req, res) => {
  res.json({
    message: 'All Restaurants',
  });
});

// GET single restaurant
router.get('/:id', (req, res) => {
  res.json({
    message: `Restaurant ${req.params.id}`,
  });
});

// POST create new restaurant
router.post('/', createNewRestaurant);

// DELETE delete restaurant
router.delete('/:id', (req, res) => {
  res.json({
    message: `Delete restaurant ${req.params.id}`,
  });
});

// PUT or PATCH or POST update restaurant
router.patch('/:id', (req, res) => {
  res.json({
    message: `Update restaurant ${req.params.id}`,
  });
});

export default router;
