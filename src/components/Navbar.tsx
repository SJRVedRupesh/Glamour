import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Wand2, Video, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wand2 className="h-8 w-8 text-beauty-pink-dark" />
              <span className="ml-2 text-xl font-bold text-beauty-pink-dark">Glam Guru</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-beauty-pink-dark">
              <Home className="h-5 w-5" />
            </Link>
            <Link to="/quiz" className="text-gray-600 hover:text-beauty-pink-dark">
              Makeup Quiz
            </Link>
            <Link to="/tutorials" className="text-gray-600 hover:text-beauty-pink-dark">
              <Video className="h-5 w-5" />
            </Link>
            <Link to="/chat" className="text-gray-600 hover:text-beauty-pink-dark">
              <MessageSquare className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-beauty-pink-light hover:text-beauty-pink-dark"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/quiz" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-beauty-pink-light hover:text-beauty-pink-dark"
              onClick={toggleMenu}
            >
              Makeup Quiz
            </Link>
            <Link 
              to="/tutorials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-beauty-pink-light hover:text-beauty-pink-dark"
              onClick={toggleMenu}
            >
              Tutorials
            </Link>
            <Link 
              to="/chat" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-beauty-pink-light hover:text-beauty-pink-dark"
              onClick={toggleMenu}
            >
              Chat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
