import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Note: The specific theme toggler CSS is complex, so for simplicity, 
// its styles are included in a separate file. In a real project,
// you might use a library or more advanced CSS techniques.
import './ThemeToggler.css'; 

// Importing images
import logo from '../assets/images/logo.webp';
import logoDark from '../assets/images/logo_dark.webp';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 shadow-lg">
            <nav className="flex justify-between items-center relative list-none px-5 md:px-20 py-3">
                <div className="logo">
                    <Link to="/">
                        <img className="w-44" src={theme === 'light' ? logoDark : logo} alt="CoderClas Main Logo" />
                    </Link>
                </div>

                <div className="flex items-center">
                    <div className="wrapper mr-6">
                        <input type="checkbox" id="hide_checkbox" onChange={handleThemeSwitch} checked={theme === 'light'} />
                        <label htmlFor="hide_checkbox" className="toggle">
                            <span className="toggle-button">
                                <span className="crater crater-1"></span>
                                <span className="crater crater-2"></span>
                                <span className="crater crater-3"></span>   
                                <span className="crater crater-4"></span>
                                <span className="crater crater-5"></span>
                                <span className="crater crater-6"></span>
                                <span className="crater crater-7"></span>
                            </span>
                            <span className="star star-1"></span>
                            <span className="star star-2"></span>
                            <span className="star star-3"></span>
                            <span className="star star-4"></span>
                            <span className="star star-5"></span>
                            <span className="star star-6"></span>
                            <span className="star star-7"></span>
                            <span className="star star-8"></span>
                        </label>
                    </div>

                    <div className={`md:flex items-center space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} 
                        absolute md:static top-full right-0 flex-col md:flex-row bg-blog md:bg-transparent w-3/4 md:w-auto h-screen md:h-auto pt-10 md:pt-0`}>
                        <Link to="/#courses" className="text-white md:text-inherit text-center py-2 md:py-0">Courses</Link>
                        <Link to="/contact" className="text-white md:text-inherit text-center py-2 md:py-0">Contact Us</Link>
                        <Link to="/about" className="text-white md:text-inherit text-center py-2 md:py-0">About Us</Link>
                        <Link to="/login">
                            <button className="px-7 py-2 rounded-full text-white font-bold bg-gradient-to-r from-blog-secondary to-blog">Login</button>
                        </Link>
                    </div>

                    <button onClick={toggleMenu} className="md:hidden text-2xl">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

