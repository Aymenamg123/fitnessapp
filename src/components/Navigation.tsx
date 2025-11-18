import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bebas text-2xl text-electric-teal hover:text-teal-dark transition-colors">
            ELITE
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-electric-teal' : 'text-gray-300 hover:text-electric-teal'
              }`}
            >
              Home
            </Link>
            <Link
              to="/admin"
              className={`transition-colors ${
                isActive('/admin') ? 'text-electric-teal' : 'text-gray-300 hover:text-electric-teal'
              }`}
            >
              Admin
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-electric-teal hover:text-teal-dark"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 rounded transition-colors ${
                isActive('/') ? 'bg-electric-teal/10 text-electric-teal' : 'text-gray-300 hover:text-electric-teal'
              }`}
            >
              Home
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 rounded transition-colors ${
                isActive('/admin') ? 'bg-electric-teal/10 text-electric-teal' : 'text-gray-300 hover:text-electric-teal'
              }`}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
