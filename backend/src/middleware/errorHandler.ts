import { Request, Response, NextFunction } from 'express'

export interface AppError extends Error {
  statusCode?: number
  isOperational?: boolean
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', {
      message: err.message,
      stack: err.stack,
      url: req.url,
      method: req.method,
      body: req.body,
      query: req.query,
      params: req.params,
    })
  }

  // Don't leak error details in production
  const errorResponse = {
    success: false,
    message: process.env.NODE_ENV === 'production' && statusCode === 500 
      ? 'Internal Server Error' 
      : message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  }

  res.status(statusCode).json(errorResponse)
}

export const createError = (message: string, statusCode: number = 500): AppError => {
  const error = new Error(message) as AppError
  error.statusCode = statusCode
  error.isOperational = true
  return error
} 