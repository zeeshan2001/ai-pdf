# React + Express Cloudflare Boilerplate

A scalable, production-ready boilerplate for building modern web applications with React frontend and Express backend, optimized for Cloudflare deployment with AI integration support.

## 🚀 Features

- **Frontend**: React 18 with TypeScript, Vite, and modern tooling
- **Backend**: Express.js with TypeScript, structured API routing
- **Deployment**: Cloudflare Pages + Workers ready
- **AI-Ready**: Architecture designed for LLM and AI agent integration
- **Scalable**: Modular structure with clear separation of concerns
- **Modern**: Latest dependencies and best practices
- **Testing**: Vitest + React Testing Library for frontend, Vitest + Supertest for backend
- **CI/CD**: GitHub Actions workflow for automated testing and deployment
- **Documentation**: Comprehensive docs in `/docs` folder

## 📁 Project Structure

```
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Layout.tsx   # Main layout wrapper
│   │   │   ├── Header.tsx   # Navigation header
│   │   │   └── Footer.tsx   # Footer component
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx     # Landing page
│   │   │   ├── About.tsx    # About page
│   │   │   └── NotFound.tsx # 404 page
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API and external services
│   │   ├── utils/          # Utility functions
│   │   │   └── cn.ts       # Class name utility
│   │   ├── types/          # TypeScript type definitions
│   │   └── styles/         # Global styles and themes
│   │       └── globals.css # Tailwind CSS + custom styles
│   ├── public/             # Static assets
│   ├── dist/               # Build output
│   ├── vitest.setup.ts     # Test setup file
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.ts      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS config
│   └── tsconfig.json       # TypeScript config
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   │   └── ai.controller.ts # AI endpoints controller
│   │   ├── middleware/     # Custom middleware
│   │   │   ├── errorHandler.ts  # Error handling middleware
│   │   │   └── notFoundHandler.ts # 404 handler
│   │   ├── routes/         # API route definitions
│   │   │   ├── index.ts    # Main routes aggregator
│   │   │   ├── health.ts   # Health check endpoints
│   │   │   └── ai.ts       # AI-related endpoints
│   │   ├── services/       # Business logic
│   │   │   └── ai/         # AI service integrations
│   │   │       └── openai.service.ts # OpenAI service
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── config/         # Configuration files
│   ├── dist/               # Build output
│   ├── package.json        # Backend dependencies
│   ├── tsconfig.json       # TypeScript config
│   └── env.example         # Environment variables template
├── cloudflare/              # Cloudflare-specific configs
│   └── worker/             # Cloudflare Worker
│       ├── src/
│       │   └── index.ts    # Worker entry point
│       ├── tsconfig.json   # Worker TypeScript config
│       └── wrangler.toml   # Worker deployment config
├── docs/                    # Documentation
│   └── README.md           # This file
├── .github/                 # GitHub configuration
│   └── workflows/
│       └── ci.yml          # CI/CD workflow
├── package.json            # Root package.json (monorepo)
└── env.example files       # Environment templates
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Cloudflare account (for deployment)

### Installation

1. **Clone and install dependencies:**

   ```bash
   git clone <your-repo-url>
   cd react-express-cloudflare-boilerplate
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp backend/env.example backend/.env
   cp frontend/env.example frontend/.env
   ```

3. **Start development servers:**

   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## 🔧 Development

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run test` - Run tests for both frontend and backend
- `npm run test:frontend` - Run frontend tests only
- `npm run test:backend` - Run backend tests only
- `npm run lint` - Lint both frontend and backend code
- `npm run format` - Format code with Prettier
- `npm run deploy` - Deploy frontend to Cloudflare Pages

### Frontend Development

The frontend uses:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Axios** for API communication
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vitest** + **React Testing Library** for testing

### Backend Development

The backend uses:

- **Express.js** with TypeScript
- **CORS** for cross-origin requests
- **Helmet** for security headers
- **Morgan** for request logging
- **Express Validator** for request validation
- **Rate Limiting** for API protection
- **Compression** for response optimization
- **Vitest** + **Supertest** for testing

## 🧪 Testing

### Frontend Tests

```bash
npm run test:frontend
# or for UI mode
npm run test:ui
```

Tests are located in `frontend/src/**/*.test.tsx` and use:

- **Vitest** as the test runner
- **React Testing Library** for component testing
- **@testing-library/jest-dom** for custom matchers

### Backend Tests

```bash
npm run test:backend
```

Tests are located in `backend/src/**/*.test.ts` and use:

- **Vitest** as the test runner
- **Supertest** for API endpoint testing

## 🚀 Deployment

### Cloudflare Pages (Frontend)

1. **Build the frontend:**

   ```bash
   npm run build:frontend
   ```

2. **Deploy to Cloudflare Pages:**

   ```bash
   npm run deploy
   ```

   Or manually:

   ```bash
   wrangler pages deploy frontend/dist --project-name your-project-name
   ```

### Cloudflare Workers (Backend)

1. **Configure Worker:**
   - Update `cloudflare/worker/wrangler.toml` with your account ID
   - Modify `cloudflare/worker/src/index.ts` for your API needs

2. **Deploy to Cloudflare Workers:**
   ```bash
   cd cloudflare/worker
   wrangler deploy
   ```

### GitHub Actions CI/CD

The project includes a complete CI/CD pipeline in `.github/workflows/ci.yml`:

- **Triggers**: Push to main, Pull Requests
- **Steps**: Install → Lint → Test → Build → Deploy Preview
- **Deployments**:
  - Frontend: Cloudflare Pages preview
  - Backend: Cloudflare Workers preview

#### Setting up GitHub Secrets

1. **Generate Cloudflare API Token:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Profile → API Tokens → Create Custom Token
   - Grant necessary permissions (Pages:Edit, Workers:Edit, etc.)

2. **Add to GitHub Secrets:**
   - Repository Settings → Secrets and Variables → Actions
   - Add `CLOUDFLARE_API_TOKEN` with your token value

## 🤖 AI Integration Ready

This boilerplate is designed with AI integration in mind:

- **Modular Service Layer**: Easy to add AI service integrations
- **Type-Safe API**: TypeScript interfaces for AI request/response handling
- **Scalable Architecture**: Support for multiple AI providers and models
- **Error Handling**: Robust error handling for AI service failures
- **Rate Limiting**: Built-in rate limiting for AI API calls

### Example AI Integration

```typescript
// backend/src/services/ai/openai.service.ts
export class OpenAIService {
  async generateResponse(prompt: string): Promise<string> {
    // AI integration logic
  }
}

// backend/src/controllers/ai.controller.ts
export class AIController {
  async generateContent(req: Request, res: Response) {
    // Handle AI requests
  }
}
```

### Available AI Endpoints

- `POST /api/ai/generate` - Generate content with AI
- `GET /api/ai/models` - Get available AI models
- `POST /api/ai/chat` - Chat completion endpoint

## 🔒 Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:5173
# Add your AI service API keys here
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
# Logging
LOG_LEVEL=info
```

### Frontend (.env)

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_NAME=React Express Boilerplate
VITE_APP_VERSION=1.0.0
# Feature Flags
VITE_ENABLE_AI_FEATURES=true
VITE_ENABLE_ANALYTICS=false
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and tests: `npm run lint && npm run test`
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For questions and support:

- Create an issue in the repository
- Check the documentation in each directory
- Review the example implementations
- Check the test files for usage examples

## 🎯 What's Included

### ✅ Completed Features

- [x] React 18 + TypeScript frontend with Vite
- [x] Express.js + TypeScript backend
- [x] Tailwind CSS styling with custom components
- [x] React Router for navigation
- [x] API routing with validation and error handling
- [x] Health check endpoints
- [x] AI service integration structure
- [x] Rate limiting and security middleware
- [x] Comprehensive testing setup
- [x] Cloudflare Worker example
- [x] GitHub Actions CI/CD pipeline
- [x] Environment configuration
- [x] Documentation structure

### 🚀 Ready for Production

- [x] TypeScript strict mode
- [x] ESLint and Prettier configuration
- [x] Error handling and logging
- [x] CORS and security headers
- [x] Compression and optimization
- [x] Modular architecture
- [x] Scalable folder structure

---

Built with ❤️ for scalable AI-powered applications
