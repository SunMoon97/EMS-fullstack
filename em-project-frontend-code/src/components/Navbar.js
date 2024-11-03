import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-16 px-8 flex items-center shadow-lg">
      <h1 className="text-3xl font-bold text-green-500">👨🏼‍💻 EM Service</h1>
      <div className="ml-auto flex space-x-6">
        <Link className="text-white hover:text-blue-400 transition duration-200" to="/">Home</Link>
        <Link className="text-white hover:text-blue-400 transition duration-200" to="/profile">Profile</Link>
        <Link className="text-white hover:text-blue-400 transition duration-200" to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
