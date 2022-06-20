import { Router } from 'express';

// instance of router
const router = Router();

// GET all workouts
router.get('/', (_req, res) => {
  res.json({
    message: 'All workouts',
  });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({
    message: `Workout ${req.params.id}`,
  });
});

// POST create new workout
router.post('/', (_req, res) => {
  res.json({
    message: 'Create new workout',
  });
});

// DELETE delete workout
router.delete('/:id', (req, res) => {
  res.json({
    message: `Delete workout ${req.params.id}`,
  });
});

// PUT or PATCH or POST update workout
router.patch('/:id', (req, res) => {
  res.json({
    message: `Update workout ${req.params.id}`,
  });
});

export default router;
