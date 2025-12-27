import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight, FiCode, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi';

const SocialLink = ({ href, icon: Icon, label, className = '' }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-all duration-300 ${className}`}
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <p className="text-blue-400 font-mono text-sm mb-4">Hello, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Tesfamariam M.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
              I build things for the web.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              I'm a full-stack developer specializing in building exceptional digital experiences. 
              I create responsive, accessible, and performant web applications and cross-platform 
              mobile applications using Flutter and React Native.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/projects"
                className="group relative flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <FiArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-gray-600 hover:border-blue-400 text-lg font-medium rounded-lg text-gray-200 hover:text-white bg-transparent hover:bg-white/5 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 max-w-md mx-auto">
              <p className="text-sm font-mono text-gray-400 mb-6">CONNECT WITH ME</p>
              <div className="flex items-center justify-center space-x-4">
                <SocialLink 
                  href="https://github.com/Wege0921" 
                  icon={FiGithub} 
                  label="GitHub"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/tesfamariam/" 
                  icon={FiLinkedin} 
                  label="LinkedIn"
                />
                <SocialLink 
                  href="https://twitter.com/yourusername" 
                  icon={FiTwitter} 
                  label="Twitter"
                />
                <SocialLink 
                  href="mailto:your.email@example.com" 
                  icon={FiMail} 
                  label="Email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FiCode}
              title="Web Development"
              description="Building responsive and scalable web applications with modern frameworks and best practices."
            />
            <FeatureCard
              icon={FiLayers}
              title="UI/UX Design"
              description="Creating intuitive and engaging user experiences with a focus on usability and accessibility."
            />
            <FeatureCard
              icon={FiSmartphone}
              title="Mobile Development"
              description="Building cross-platform mobile applications with Flutter and React Native for iOS and Android."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a project in mind?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Let's Talk
            <FiArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
