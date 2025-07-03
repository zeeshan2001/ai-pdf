import { BookOpen, Code, Cloud, Zap } from 'lucide-react'

const About = () => {
  const techStack = [
    {
      category: 'Frontend',
      items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
      icon: <Code className="h-5 w-5" />,
    },
    {
      category: 'Backend',
      items: ['Express.js', 'Node.js', 'TypeScript', 'Joi Validation', 'Morgan Logging'],
      icon: <Zap className="h-5 w-5" />,
    },
    {
      category: 'Deployment',
      items: ['Cloudflare Pages', 'Cloudflare Workers', 'Wrangler CLI'],
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      category: 'Development',
      items: ['ESLint', 'Prettier', 'Vitest', 'Concurrently'],
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About This Boilerplate
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A comprehensive foundation for building scalable web applications with modern technologies and AI integration capabilities.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((stack) => (
              <div key={stack.category} className="card">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white">
                      {stack.icon}
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{stack.category}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Modular structure with clear separation of concerns, making it easy to scale and maintain as your application grows.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">AI Integration Ready</h3>
                <p className="text-gray-600">
                  Built with AI services in mind, featuring service layers and type-safe interfaces for LLM integration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cloudflare Optimized</h3>
                <p className="text-gray-600">
                  Configured for seamless deployment on Cloudflare Pages and Workers with optimal performance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Developer Experience</h3>
                <p className="text-gray-600">
                  Hot reloading, TypeScript support, linting, and testing setup for a smooth development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 