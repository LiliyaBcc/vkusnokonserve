import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ana Sayfa', href: '/', current: location.pathname === '/' },
    { name: 'Hakkımızda', href: '/about', current: location.pathname === '/about' },
    { name: 'Ürünler', href: '/products', current: location.pathname === '/products' },
    { name: 'İletişim', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <header className="design-header">
      <div className="nav-container">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">VKUSNO KONSERVE</span>
        </Link>
        
        <nav className="nav-menu">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${item.current ? 'text-green-600' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button 
          className="btn-nav-toggle md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-page border-b border-light z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${item.current ? 'text-green-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;