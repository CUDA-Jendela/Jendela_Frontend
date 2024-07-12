import React from 'react';

import logoWhite from "@/assets/logo_white.png";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-between bg-primary bg-main2 p-5 pb-8 px-12 z-50 text-white">
            {/* Logo */}
            <Link to="/" className="text-white text-lg font-bold transition-transform duration-300 transform hover:scale-110">
                <img src={logoWhite} className="w-16"></img>
            </Link>

            <div className='pt-3 text-white font-semibold'>
                © 2024 CUDA GarudaHacks 5.0
            </div>
        </div>
    )
};

export default Navbar;