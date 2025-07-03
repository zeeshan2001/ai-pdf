import { Request, Response } from 'express'
import { OpenAIService } from '../services/ai/openai.service'
import { createError } from '../middleware/errorHandler'

export class AIController {
  private openaiService: OpenAIService

  constructor() {
    this.openaiService = new OpenAIService()
  }

  async generateContent(req: Request, res: Response): Promise<Response> {
    try {
      const { prompt, model = 'gpt-3.5-turbo', maxTokens = 1000 } = req.body

      // Check if AI service is configured
      if (!process.env.OPENAI_API_KEY) {
        return res.status(503).json({
          success: false,
          message: 'AI service not configured',
        })
      }

      const result = await this.openaiService.generateResponse(prompt, {
        model,
        maxTokens,
      })

      return res.json({
        success: true,
        data: {
          content: result,
          model,
          prompt,
        },
      })
    } catch (error) {
      console.error('AI generation error:', error)
      throw createError('Failed to generate content', 500)
    }
  }

  async getAvailableModels(req: Request, res: Response): Promise<Response> {
    try {
      // Mock models for now - replace with actual API call
      const models = [
        {
          id: 'gpt-4',
          name: 'GPT-4',
          description: 'Most capable GPT model',
          maxTokens: 8192,
        },
        {
          id: 'gpt-3.5-turbo',
          name: 'GPT-3.5 Turbo',
          description: 'Fast and efficient model',
          maxTokens: 4096,
        },
        {
          id: 'gpt-3.5-turbo-16k',
          name: 'GPT-3.5 Turbo 16K',
          description: 'Extended context model',
          maxTokens: 16384,
        },
      ]

      return res.json({
        success: true,
        data: models,
      })
    } catch (error) {
      console.error('Error fetching models:', error)
      throw createError('Failed to fetch models', 500)
    }
  }

  async chatCompletion(req: Request, res: Response): Promise<Response> {
    try {
      const { messages, model = 'gpt-3.5-turbo', maxTokens = 1000 } = req.body

      // Check if AI service is configured
      if (!process.env.OPENAI_API_KEY) {
        return res.status(503).json({
          success: false,
          message: 'AI service not configured',
        })
      }

      const result = await this.openaiService.chatCompletion(messages, {
        model,
        maxTokens,
      })

      return res.json({
        success: true,
        data: {
          response: result,
          model,
          messages,
        },
      })
    } catch (error) {
      console.error('Chat completion error:', error)
      throw createError('Failed to process chat completion', 500)
    }
  }
} 