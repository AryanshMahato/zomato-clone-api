import { Router } from "express";
import Restaurant from "../Controller/Restaurant";

const restaurantRoutes = Router();

// Gets all categories
restaurantRoutes.get("/categories", Restaurant.getAllCategories);

// Gets all cuisines
restaurantRoutes.get("/cuisines", Restaurant.getAllCuisines);

export default restaurantRoutes;
