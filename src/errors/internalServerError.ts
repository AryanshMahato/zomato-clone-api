import { Response } from "express";

const internalServerError = (res: Response, err?: any) => {
  res.status(500).json({
    message: "Internal Server Error",
    error: err,
  });
};

export default internalServerError;
