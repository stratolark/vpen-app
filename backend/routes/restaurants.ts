import { Router } from 'express';
import {
  getRestaurant,
  getAllRestaurants,
  createNewRestaurant,
  deleteRestaurant,
  updateRestaurant,
} from '../controllers/restaurantController';

// instance of router
const router = Router();

// GET all workouts
router.get('/', getAllRestaurants);

// GET single restaurant
router.get('/:id', getRestaurant);

// POST create new restaurant
router.post('/', createNewRestaurant);

// DELETE delete restaurant
router.delete('/:id', deleteRestaurant);

// PUT or PATCH or POST update restaurant
router.patch('/:id', updateRestaurant);

export default router;
