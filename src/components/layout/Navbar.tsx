import { NavLink, Link } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="glass navbar">
      <Link to="/" className="brand">
        <FlaskConical size={24} className="text-accent" />
        <span>R&D Lab</span>
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={(navData: any) => `nav-link ${navData.isActive ? 'active' : ''}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
