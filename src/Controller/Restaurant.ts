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
}
