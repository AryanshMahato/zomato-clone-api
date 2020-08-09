import { Router, Request, Response } from "express";
import axios from "axios";


const cityRoutes = Router();

cityRoutes.get("/", (req: Request, res: Response) => {
  console.log(req.body);
});

export default cityRoutes;
