import { Router, Request, Response } from "express";
import axios from "axios";

const locationRoutes = Router();

// Gets all cities by name
locationRoutes.get("/all", (req: Request, res: Response) => {
  console.log(req.body);
});

// Gets all city details by id
locationRoutes.get("/", (req: Request, res: Response) => {
  console.log(req.body);
});

export default locationRoutes;
