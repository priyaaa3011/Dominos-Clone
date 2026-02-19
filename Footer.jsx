import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white">
            <div className="mx-auto max-w-screen-xl px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img
                                src="https://i.pinimg.com/474x/b8/d9/1c/b8d91c34fb5e83012d64a383a2bce9ef.jpg"
                                className="h-16"
                                alt="Domino's Logo"
                            />
                        </Link>
                        <p className="text-sm text-gray-300">
                            Delivering piping hot pizzas from your local Domino’s. Fast, fresh & delicious!
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase">Resources</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link to="/" className="hover:underline hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu" className="hover:underline hover:text-white">Menu</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase">Follow Us</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="https://www.facebook.com/Dominos" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/dominos" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dominos/" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Instagram</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <Link to="/privacy-policy" className="hover:underline hover:text-white">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions" className="hover:underline hover:text-white">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-8 border-gray-600" />

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
                    <span>
                        © 2025 <a href="https://www.dominos.com" className="hover:underline">Domino's Pizza</a>. All rights reserved.
                    </span>
                    <div className="flex space-x-5 mt-4 sm:mt-0">
                        <a href="https://www.facebook.com/Dominos" target="_blank" rel="noreferrer" className="hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/dominos" target="_blank" rel="noreferrer" className="hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/dominos/" target="_blank" rel="noreferrer" className="hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
