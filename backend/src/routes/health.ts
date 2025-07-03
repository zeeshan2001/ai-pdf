import { Router, Request, Response } from 'express'

const router = Router()

// Basic health check
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  })
})

// Detailed health check
router.get('/detailed', (req: Request, res: Response) => {
  const healthData = {
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    memory: process.memoryUsage(),
    version: process.version,
    platform: process.platform,
    arch: process.arch,
  }

  res.json(healthData)
})

export default router 