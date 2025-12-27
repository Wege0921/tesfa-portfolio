import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiFolder, 
  FiMail
} from 'react-icons/fi';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Projects', path: '/projects', icon: FiFolder },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`
      w-full sticky top-0 z-50 h-16 flex items-center
      bg-white dark:bg-gray-900
      border-b border-gray-200 dark:border-gray-700
      shadow-sm
    `}>
      <div className="w-full max-w-4xl mx-auto px-4 relative">
        <nav className="grid grid-cols-4 h-full items-center justify-items-center relative z-10">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group flex flex-col items-center justify-center h-full w-full
                  ${active ? 'text-blue-500 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}
                  hover:text-gray-900 dark:hover:text-white
                `}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-xs">
                  {item.name}
                  {active && (
                    <span className="block h-0.5 w-full bg-blue-500 dark:bg-blue-400 rounded-full mt-1" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
