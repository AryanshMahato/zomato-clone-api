import { Request, Response } from "express";
import mAxios from "../util/mAxios";
import { ICategory } from "../types/Category";

export default class Restaurant {
  public static getAllCategories = async (req: Request, res: Response) => {
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
  };
}
