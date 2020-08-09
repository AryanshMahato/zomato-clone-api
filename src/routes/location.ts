import { Router } from "express";
import Location from "../Controller/Location";
import { check } from "express-validator";
import validationError from "../errors/validationError";

const locationRoutes = Router();

// Gets all cities by name
locationRoutes.get(
  "/all",
  check("location", "Location is required String").isString(),
  validationError,
  Location.getAllLocation
);

// Gets all city details by id
locationRoutes.get(
  "/",
  check("id", "Id is required Number").isNumeric(),
  validationError,
  Location.getLocation
);

export default locationRoutes;
