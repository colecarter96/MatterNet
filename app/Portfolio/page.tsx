import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: "PANTS INDEX",
      description: "A comprehensive index for finding similar items and contributing to a growing database.",
      url: "https://pants-index.vercel.app/",
      features: ["Find Similar", "Contribute", "Contact"]
    },
    {
      title: "UBIC WEBSITE",
      description: "A modern web application showcasing innovative design and functionality.",
      url: "https://ubic-website-cole.web.app/",
      features: ["Modern Design", "Responsive", "Interactive"]
    },
    {
      title: "MATTER ALPHA",
      description: "An advanced terminal-based interface with dynamic controls and project management.",
      url: "https://matter-alpha.vercel.app/",
      features: ["Terminal Interface", "Dynamic Controls", "Project Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-roboto-mono text-6xl md:text-8xl font-bold text-right pr-32 mb-8">
            PORTFOLIO
          </h1>
          <p className="font-rubik text-xl md:text-2xl ml-32 mr-[40%] text-gray-700">
            A collection of our featured projects showcasing modern web development, 
            innovative design, and cutting-edge functionality.
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-black w-[98%] mx-auto mb-20"></div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Container */}
              <div className="bg-black/90 text-white rounded-lg p-8 transition-all duration-300 hover:bg-black">
                
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <h2 className="font-roboto-mono text-3xl font-bold mb-4 text-[#CA0000]">
                      {project.title}
                    </h2>
                    
                    <p className="font-rubik text-base mb-6 text-gray-300">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-roboto-mono text-sm font-bold mb-3 text-gray-400">
                        FEATURES
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="font-rubik text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-[#CA0000] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Visit Button */}
                    <Link 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-6 py-3 rounded-lg font-roboto-mono font-bold text-center"
                    >
                      VIEW FULL SITE
                    </Link>
                  </div>
                  
                  {/* Live Preview */}
                  <div className="lg:w-2/3 lg:pl-8">
                    <div className="relative bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="ml-4 text-gray-400 text-sm font-roboto-mono">
                          {project.url}
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-md">
                        <iframe
                          src={project.url}
                          className="w-full h-64 md:h-80 lg:h-96 border-0 rounded-md"
                          title={`${project.title} Preview`}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                        {/* Overlay for better UX */}
                        <Link 
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                        >
                          <span className="bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-4 py-2 rounded-lg font-roboto-mono font-bold text-white">
                            OPEN IN NEW TAB
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black/5 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-roboto-mono text-4xl md:text-6xl font-bold mb-8">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="font-rubik text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your vision 
            and bring your ideas to life.
          </p>
          <Link 
            href="/Packages"
            className="inline-block bg-[#CA0000] hover:bg-[#ff0000] transition-colors px-8 py-4 rounded-lg font-roboto-mono text-xl font-bold text-white"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
} 