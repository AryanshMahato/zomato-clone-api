import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  // Request is valid
  if (errors.isEmpty()) {
    return next();
  }

  // Request is not valid
  res.status(400).json({
    message: "Validation Error",
    errors: errors.array(),
  });
};
