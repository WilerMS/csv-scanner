import { type Request, type Response, type NextFunction } from 'express'
import { ApiError } from '@/errors'

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({
        status: err.status,
        error: err.name,
        message: err.message
      })
  }

  res
    .status(500)
    .json({
      error: 'InternalServerError',
      message: 'Something went wrong!'
    })
}
