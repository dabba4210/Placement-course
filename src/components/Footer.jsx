import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.webp';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 font-poppin w-full py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <img className="h-10 mb-4" src={logo} alt="CoderClas" />
                        <p className="text-sm leading-relaxed dark:text-gray-300 text-gray-600">
                            Coderclas was started with a mission to provide affordable &amp; high quality education for everyone.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                            ©2023 CoderClas. All rights reserved
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/#courses" className="hover:text-blog">Our Courses</Link></li>
                            <li><a href="https://www.youtube.com/@coderclas" target="_blank" rel="noreferrer" className="hover:text-blog">Community</a></li>
                            <li><Link to="/#social" className="hover:text-blog">Social Media</Link></li>
                            <li><Link to="/#instructor" className="hover:text-blog">Mentors</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Get in Touch</h3>
                        <div className="flex flex-col space-y-2 items-center md:items-start">
                            <p className="font-semibold">Contact Us</p>
                            <a href="mailto:support@coderclas.com" className="text-sm hover:text-blog">support@coderclas.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

