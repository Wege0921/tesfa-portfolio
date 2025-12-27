import { FiUser, FiMapPin, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 p-4">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
        </h1>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-8">
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate Full-Stack Developer with expertise in building modern, scalable, and performant web and mobile applications. 
            I transform complex ideas into elegant, user-friendly solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center">
              <FiUser className="text-blue-400 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="font-medium">Tesfamariam Muluneh Teklemariam</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FiMapPin className="text-green-400 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Addis Ababa, Et</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FiMail className="text-purple-400 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">wegemuluneh@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com/Wege0921" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/tesfamariam/" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-colors duration-300">
              <FiTwitter className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind or want to discuss potential opportunities? 
            I'm always open to new challenges and interesting projects.
          </p>
          <a 
            href="mailto:wegemuluneh@gmail.com" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
