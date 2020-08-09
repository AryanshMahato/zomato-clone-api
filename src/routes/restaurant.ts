import { Router } from "express";
import Restaurant from "../Controller/Restaurant";
import { check } from "express-validator";

const restaurantRoutes = Router();

// Gets all categories
restaurantRoutes.get("/categories", Restaurant.getAllCategories);

// Gets all cuisines
restaurantRoutes.post(
  "/cuisines",
  check("locationId", "LocationId is required Number").isNumeric(),
  Restaurant.getAllCuisines
);

export default restaurantRoutes;
