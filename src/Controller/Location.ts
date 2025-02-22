import { Request, Response } from "express";
import queryString from "query-string";
import mAxios from "../util/mAxios";
import { ILocation } from "../types/Location";
import internalServerError from "../errors/internalServerError";

export default class Location {
  public static getAllLocation = async (req: Request, res: Response) => {
    const { location } = req.body;
    const searchString = queryString.stringify({ q: location });

    try {
      const { data } = await mAxios.get(`cities?${searchString}`);

      // Extracts required data
      const locations = data.location_suggestions.map(
        (location: ILocation) => ({
          id: location.id,
          name: location.name,
          country: location.country_name,
        })
      );
      res.status(200).json({
        message: "Some Suggestions",
        locations,
      });
    } catch (e) {
      internalServerError(res);
      console.log(e);
    }
  };

  public static getLocation = async (req: Request, res: Response) => {
    const { id } = req.body;
    const searchString = queryString.stringify({ city_ids: id });

    try {
      const { data } = await mAxios.get(`cities?${searchString}`);

      // Extracts required data
      const location: ILocation = data.location_suggestions[0];

      res.status(200).json({
        message: "City Found!",
        location,
      });
    } catch (e) {
      internalServerError(res);
      console.log(e);
    }
  };
}
