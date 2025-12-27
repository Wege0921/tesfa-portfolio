import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiCode } from 'react-icons/fi';

const FooterLink = ({ to, children, className = '' }) => (
  <Link 
    to={to} 
    className={`block py-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 ${className}`}
  >
    {children}
  </Link>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400/30 text-gray-400 hover:text-white transition-all duration-300"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 border-t border-white/5 pt-16 pb-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* About Section */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center mb-4">
              <FiCode className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Tesfamariam M.
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-stack developer passionate about building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex justify-center space-x-3">
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
                href="mailto:wegemuluneh@gmail.com" 
                icon={FiMail} 
                label="Email" 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <nav className="space-y-3 w-full">
              <FooterLink to="/" className="block w-full text-center md:text-left">Home</FooterLink>
              <FooterLink to="/about" className="block w-full text-center md:text-left">About Me</FooterLink>
              <FooterLink to="/projects" className="block w-full text-center md:text-left">My Projects</FooterLink>
              <FooterLink to="/contact" className="block w-full text-center md:text-left">Get in Touch</FooterLink>
            </nav>
          </div>

          {/* Technologies */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">
              Technologies
            </h3>
            <nav className="space-y-3 w-full">
              <FooterLink to="#" className="block w-full text-center md:text-left">React & Next.js</FooterLink>
              <FooterLink to="#" className="block w-full text-center md:text-left">Node.js & Express</FooterLink>
              <FooterLink to="#" className="block w-full text-center md:text-left">Python & Django</FooterLink>
              <FooterLink to="#" className="block w-full text-center md:text-left">Flutter & Dart</FooterLink>
              <FooterLink to="#" className="block w-full text-center md:text-left">MongoDB & PostgreSQL</FooterLink>
            </nav>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Tesfamariam M. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-white"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to top</span>
            <FiArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
