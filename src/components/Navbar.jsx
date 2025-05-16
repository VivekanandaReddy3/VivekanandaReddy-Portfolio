// Navbar.jsx
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <div className="flex justify-center">
      <nav className="w-[550px] mx-auto mt-20 bg-transparent flex justify-between items-center">
      <Link to='/'>
        <p className="font-semibold hover: text-slate-900">vrg.</p>
      </Link>

      <div className="flex space-x-2 font" >
        <Link to='/info' className="text-slate-900 hover:text-slate-600 font-medium">
        Information
        </Link>
        <Link to='/writing' className="text-slate-900 hover:text-slate-600 font-medium">
        Writing
        </Link>
        <Link to='/contact' className="text-slate-900 hover:text-slate-600 font-medium">
        Contact
        </Link>
        
      </div>

    </nav>
    </div>
    
  );
};

export default Navbar;
