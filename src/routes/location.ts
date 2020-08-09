import { Router, Request, Response } from "express";
import Location from "../Controller/Location";
import { body } from "express-validator";
import axios from "axios";

const locationRoutes = Router();

// Gets all cities by name
locationRoutes.get("/all", Location.getAllLocation);

// Gets all city details by id
locationRoutes.get("/", (req: Request, res: Response) => {
  console.log(req.body);
});

export default locationRoutes;
