import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-white text-2xl font-extrabold tracking-wide">📚 Book Manager</h1>
      <div className="flex space-x-6">
        <Link to='/' className='text-white hover:text-yellow-400 transition-colors duration-300'>Home</Link>
        <Link to='/show-book' className='text-white hover:text-yellow-400 transition-colors duration-300'>Show Book</Link>
        <Link to='/add-book' className='text-white hover:text-yellow-400 transition-colors duration-300'>Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;