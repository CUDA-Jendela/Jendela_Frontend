import React from 'react';

import { Link } from 'react-router-dom';
import logoWhite from "@/assets/logo_white.png";
import { Button } from '../ui/button';

const Navbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between bg-primary p-5 px-10 sticky top-0 z-50 text-white h-full">
            {/* Left side */}
            <div className="flex items-center space-x-10">
                {/* Logo */}
                <Link to="/" className="text-white text-lg font-bold transition-transform duration-300 transform hover:scale-110">
                    <img src={logoWhite} className="w-16"></img>
                </Link>
            </div>

            {/* Right side */}
            <div className='space-x-4 flex h-full items-center'>
                <Link to="/" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Course List
                </Link>
                <Link to="/" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Hiring List
                </Link>
                <Link to="/" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Profile
                </Link>
                <Link to="/login" className="text-white text-lg font-bold">
                    <Button className="border rounded-3xl text-lg px-8 border-white text-white hover:bg-white hover:text-primary hover:font-bold">Login</Button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;