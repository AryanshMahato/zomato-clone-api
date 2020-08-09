import { Router } from "express";
import Restaurant from "../Controller/Restaurant";

const restaurantRoutes = Router();

// Gets all categories
restaurantRoutes.get("/categories", Restaurant.getAllCategories);

export default restaurantRoutes;
