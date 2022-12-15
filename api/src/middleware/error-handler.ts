import { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'joi'

export const validationErrorHandler = (
  error: ValidationError,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  response.status(400).send(error)
}
