// where the get, post, etc., are defined
// then pass into the routes as middleware

import { Restaurant } from '../models/retaurantModel';

// get all restaurants

// get single restaurant

// post new restaurant
export async function createNewRestaurant(req: any, res: any) {
  try {
    const { name, address } = req.body;
    const newRestaurant = await Restaurant.create({
      name,
      address,
    });
    res.status(200).json(newRestaurant);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// delete restaurant

// update restaurant
