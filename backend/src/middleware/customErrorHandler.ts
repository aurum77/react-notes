import CustomError from "../helpers/CustomError";
import { Request, Response, NextFunction } from "express";

const customErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError: CustomError = err;

  if (err.name === "SyntaxError")
    customError = new CustomError("Invalid Syntax", 400);

  res.status(customError.status || 500).json({
    message: customError.message || "Internal Servor Error",
  });
};

export default customErrorHandler;
