import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const FilterButton = ({ tech, isActive, onClick }) => (
  <button
    onClick={() => onClick(tech)}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 
      ${isActive 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
      }`}
  >
    {tech}
  </button>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All' 
      ? projects 
      : projects.filter(p => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A showcase of my work in mobile and web development, featuring applications built with Flutter, React Native, and modern web technologies.
            </p>
            
            {/* Skills Section */}
            <div className="mt-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Expertise</h2>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {['Flutter', 'Dart', 'React Native', 'JavaScript', 'Java', 'React', 'Node.js', 'Django'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I specialize in creating beautiful, responsive mobile applications with Flutter and Dart, 
                and I'm also proficient in web development with Java, Python, and modern JavaScript frameworks.
              </p>
            </div>

            {/* Technology Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {allTechnologies.map((tech) => (
                <FilterButton 
                  key={tech}
                  tech={tech}
                  isActive={activeFilter === tech}
                  onClick={setActiveFilter}
                />
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="mt-12">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-2xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300">
                  No projects found with the selected technology.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="flex justify-center w-full">
                    <ProjectCard project={project} className="w-full max-w-md" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
