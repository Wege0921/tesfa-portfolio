import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-full rounded-2xl overflow-hidden transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}></div>
      
      <div className="relative h-full flex flex-col">
        <div className="p-6 pb-4 flex-grow">
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-3">
                <FiLayers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
            {project.company && (
              <div className="flex items-center text-sm text-gray-400 ml-13 -mt-1">
                <span className="text-blue-400 font-medium">{project.company}</span>
                {project.duration && (
                  <span className="mx-2">•</span>
                )}
                {project.duration && (
                  <span>{project.duration}</span>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-300 mb-6">{project.description}</p>

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3 flex items-center">
                <FiCode className="mr-2" /> Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">▹</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-white/5 text-blue-300 px-3 py-1 rounded-full border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-gradient-to-r from-white/5 to-transparent">
          <div className="flex items-center justify-between">
            <a
              href={project.github || 'https://github.com/Wege0921'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-blue-400 hover:text-white bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 group"
            >
              <FiGithub className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Code
            </a>
            
            <a
              href={project.github || 'https://github.com/Wege0921'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/30"
            >
              <FiExternalLink className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
