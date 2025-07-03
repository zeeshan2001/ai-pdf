import { Router } from 'express'
import healthRoutes from './health'
import aiRoutes from './ai'

const router = Router()

// Health check routes
router.use('/health', healthRoutes)

// AI-related routes
router.use('/ai', aiRoutes)

// Default API info route
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'React Express Boilerplate API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      ai: '/api/ai',
    },
  })
})

export { router as apiRoutes } 