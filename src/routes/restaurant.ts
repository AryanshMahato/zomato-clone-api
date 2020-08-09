import { Router } from "express";
import Restaurant from "../Controller/Restaurant";
import { check } from "express-validator";
import validationError from "../errors/validationError";

const restaurantRoutes = Router();

// Gets all restaurants
restaurantRoutes.get(
  "/all",
  check("locationId", "LocationId is required Number").isNumeric(),
  validationError,
  Restaurant.getAllRestaurant
);

// Gets all categories
restaurantRoutes.get("/categories", Restaurant.getAllCategories);

// Gets all cuisines
restaurantRoutes.post(
  "/cuisines",
  check("locationId", "LocationId is required Number").isNumeric(),
  validationError,
  Restaurant.getAllCuisines
);

export default restaurantRoutes;
