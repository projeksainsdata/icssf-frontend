import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'navbar-fixed' : 'navbar-sticky'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="path-to-your-logo" alt="Logo" className="h-8 w-8" />
          <Link to="/" className={`nav-link ${isSticky ? 'text-black' : 'text-white'} text-xl`}>ICSSF</Link>
        </div>
        <div className="hidden md:flex space-x-4 font-bold">
          <Link to="/" className={`nav-link ${isSticky ? 'text-black' : 'text-white'}`}>Home</Link>
          <Link to="/program" className={`nav-link ${isSticky ? 'text-black' : 'text-white'}`}>Program</Link>
          <Link to="/author" className={`nav-link ${isSticky ? 'text-black' : 'text-white'}`}>Author</Link>
          <Link to="/information" className={`nav-link ${isSticky ? 'text-black' : 'text-white'}`}>Information</Link>
        </div>
        <div className="hidden md:flex space-x-4 font-bold">
          <Link to="/login" className={`mt-2 nav-link ${isSticky ? 'text-black' : 'text-white'}`}>Login</Link>
          <Link to="/signup" className={`nav-link ${isSticky ? 'bg-darkGreen text-white' : 'bg-darkGreen text-white'} px-4 py-2 rounded-full`}>Sign Up</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`nav-link ${isSticky ? 'text-black' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden ${isSticky ? 'bg-gray-400 bg-opacity-50' : 'bg-green-900'}`}>
          <Link to="/" className="block nav-link py-2">Home</Link>
          <Link to="/program" className="block nav-link py-2">Program</Link>
          <Link to="/author" className="block nav-link py-2">Author</Link>
          <Link to="/information" className="block nav-link py-2">Information</Link>
          <Link to="/login" className="block nav-link py-2">Login</Link>
          <Link to="/signup" className="block nav-link bg-green-500 px-4 py-2 rounded mt-2">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
