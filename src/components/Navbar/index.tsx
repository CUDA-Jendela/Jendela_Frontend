import React from 'react';

import { Link } from 'react-router-dom';
import logoWhite from "@/assets/logo_white.png";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import useAuth from '@/contexts/AuthContext';
import people from '@/assets/images/people.avif';

const Navbar: React.FC = () => {
    const { username, role, logout } = useAuth();

    const handleLogout = () => {
        // Basically calling logout
        logout();
        window.location.href = "/";
    };
    
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
                {role == "customer" && (<><Link to="/course" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Courses
                </Link>
                <Link to="/" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Business
                </Link>
                <Link to="/" className="text-white text-lg font-semibold hover:underline hover:underline-offset-4 p-1.5 px-5 rounded-3xl transition-transform duration-300 transform hover:scale-110">
                    Profile
                </Link></>)}

                {role == null && <Link to="/login" className="text-white text-lg font-bold">
                    <Button className="border rounded-3xl text-lg px-8 border-white text-white hover:bg-white hover:text-primary hover:font-bold">Login</Button>
                </Link>}

                {/* Right Side Links */}
                {role != null && <div className="flex items-center space-x-5">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="flex space-x-3 bg-primary hover:bg-gray-10 text-white">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={people} draggable="false" />
                                        <AvatarFallback>{username}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col text-start md:block hidden">
                                        <div className="text-white text-base">{username}</div>
                                    </div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Button onClick={handleLogout} className='text-white'>Logout</Button>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>}
            </div>
        </div>
    )
};

export default Navbar;