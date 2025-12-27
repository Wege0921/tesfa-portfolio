import { NavLink } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiFolder, 
  FiMail 
} from 'react-icons/fi';

const NavLinks = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Projects', path: '/projects', icon: FiFolder },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  return (
    <div className="w-full h-16">
      <ul className="flex flex-row w-full h-full list-none p-0 m-0">
        {navItems.map((item) => (
          <li key={item.path} className="flex-1 h-full">
            <NavLink 
              to={item.path} 
              className={({ isActive }) => `
                flex items-center justify-center h-full w-full
                transition-colors duration-200
                ${isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
              title={item.name}
            >
              <div className="flex items-center justify-center w-full h-full">
                <item.icon className="w-5 h-5 mr-2" />
                <span>{item.name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
