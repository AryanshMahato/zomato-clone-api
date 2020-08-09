import { Request, Response } from "express";
import mAxios from "../util/mAxios";
import { ICategory, ICuisines } from "../types/Category";
import queryString from "query-string";
import internalServerError from "../errors/internalServerError";

export default class Restaurant {
  public static getAllCategories = async (req: Request, res: Response) => {
    try {
      const { data } = await mAxios.get("/categories");

      // Format Data the way needed in frontend
      const categories = data.categories.map((category: ICategory) => ({
        id: category.categories.id,
        name: category.categories.name,
      }));

      res.status(200).json({
        message: "Categories",
        categories,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  };

  public static getAllCuisines = async (req: Request, res: Response) => {
    const { locationId } = req.body;
    const searchString = queryString.stringify({ city_id: locationId });

    try {
      const { data } = await mAxios.get(`/cuisines?${searchString}`);

      // Format Data the way needed in frontend
      const cuisines = data.cuisines.map((category: ICuisines) => ({
        id: category.cuisine.cuisine_id,
        name: category.cuisine.cuisine_name,
      }));

      res.status(200).json({
        message: "Categories",
        cuisines,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  };

  public static getAllRestaurant = async (req: Request, res: Response) => {
    const { locationId, cuisineId, categoryId } = req.body;
    const searchString = queryString.stringify({
      entity_id: locationId,
      entity_type: "city",
      cuisines: cuisineId,
      category: categoryId,
    });

    try {
      const { data } = await mAxios.get(`/search?${searchString}`);

      // Format Data the way needed in frontend
      const restaurants = data.restaurants?.map(({ restaurant }: any) => ({
        id: restaurant?.id,
        name: restaurant?.name,
        timings: restaurant?.timings,
        rating: restaurant?.user_rating?.aggregate_rating,
        phoneNumber: restaurant?.phone_numbers,
        location: restaurant?.location?.locality,
      }));

      res.status(200).json({
        message: "Categories",
        restaurantFound: data.results_found,
        restaurants,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  };

  public static getRestaurant = async (req: Request, res: Response) => {
    const { id } = req.body;
    const searchString = queryString.stringify({ res_id: id });

    try {
      const { data } = await mAxios.get(`/restaurant?${searchString}`);

      // Format Data the way needed in frontend
      const restaurant = {
        id: data.id,
        name: data.name,
        timings: data.timings,
        phoneNumber: data.phone_numbers,
        url: data.url,
        location: data.location,
        rating: data?.user_rating,
      };

      res.status(200).json({
        message: "Categories",
        restaurant,
      });
    } catch (e) {
      internalServerError(res, e);
    }
  };
}
