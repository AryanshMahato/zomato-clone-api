import { Router, Request, Response } from "express";
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
locationRoutes.get("/", (req: Request, res: Response) => {
  console.log(req.body);
});

export default locationRoutes;
