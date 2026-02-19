import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-blue-700 shadow-lg sticky top-0 z-50">
            <nav className="px-4 py-3 lg:px-6 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://i.pinimg.com/474x/4b/30/05/4b300563f0f78bc49457e07913f665d9.jpg"
                            className="h-16 sm:h-20"
                            alt="Domino's Logo"
                        />
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex justify-between items-center space-x-8">
                        <ul className="flex space-x-8 text-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/menu"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/order"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    Order Now
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/offer"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    Offer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-3 text-lg font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-yellow-500 font-semibold'
                                                : 'hover:text-yellow-300'
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
