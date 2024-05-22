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
        error: true,
        name: err.name,
        message: err.message
      })
  }

  res
    .status(500)
    .json({
      status: 500,
      error: true,
      name: 'InternalServerError',
      message: 'Algo salió mal, vuelve a intentarlo más tarde.'
    })
}
