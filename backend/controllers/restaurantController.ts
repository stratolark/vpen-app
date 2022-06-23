// where the get, post, etc., are defined
// then pass into the routes as middleware
import { Request, Response } from 'express';
import { Restaurant } from '../models/retaurantModel';

// get all restaurants
export async function getAllRestaurants(_req: Request, res: Response) {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json({ data: restaurants });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// get single restaurant
export async function getRestaurant(req: Request, res: Response) {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ data: [], error: 'Restaurant not found' });
    }
    res.status(200).json({ data: restaurant });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// post new restaurant
export async function createNewRestaurant(req: Request, res: Response) {
  try {
    const { name, address } = req.body;
    const newRestaurant = await Restaurant.create({
      name,
      address,
    });
    res.status(200).json({ data: newRestaurant });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// delete restaurant
export async function deleteRestaurant(req: Request, res: Response) {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ data: [], error: 'Restaurant not found' });
    }
    await restaurant.destroy();
    res.status(200).json({ data: restaurant, status: 'Restaurant deleted' });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// update restaurant

export async function updateRestaurant(req: Request, res: Response) {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ data: [], error: 'Restaurant not found' });
    }
    const { name, address } = req.body;
    await restaurant.update({
      name,
      address,
    });
    res.status(200).json({ data: restaurant, status: 'Restaurant updated' });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
