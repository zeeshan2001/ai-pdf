import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { AIController } from '../controllers/ai.controller'

const router = Router()
const aiController = new AIController()

// Validation middleware
const validateGenerateRequest = [
  body('prompt').isString().trim().isLength({ min: 1, max: 1000 }),
  body('model').optional().isString().trim(),
  body('maxTokens').optional().isInt({ min: 1, max: 4000 }),
]

// Generate content with AI
router.post('/generate', validateGenerateRequest, async (req: Request, res: Response) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      })
    }

    const result = await aiController.generateContent(req, res)
    return result
  } catch (error) {
    console.error('AI generation error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to generate content',
    })
  }
})

// Get available AI models
router.get('/models', async (req: Request, res: Response) => {
  try {
    const models = await aiController.getAvailableModels(req, res)
    return models
  } catch (error) {
    console.error('Error fetching models:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch available models',
    })
  }
})

// Chat completion endpoint
router.post('/chat', [
  body('messages').isArray().notEmpty(),
  body('messages.*.role').isIn(['user', 'assistant', 'system']),
  body('messages.*.content').isString().trim().notEmpty(),
], async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      })
    }

    const result = await aiController.chatCompletion(req, res)
    return result
  } catch (error) {
    console.error('Chat completion error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to process chat completion',
    })
  }
})

export default router 