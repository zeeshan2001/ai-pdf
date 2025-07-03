const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 React Express Boilerplate. Built with ❤️ for scalable applications.
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://cloudflare.com"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 