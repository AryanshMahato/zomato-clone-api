import { Request, Response } from "express";

export default class Location {
  public static getAllLocation = (req: Request, res: Response) => {
    res.json({
      location: "Hello",
    });
  };
}
