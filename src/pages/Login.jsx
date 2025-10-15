import React from 'react';
import loginBg from '../assets/images/login_bg.png';
import logo from '../assets/images/logo.webp';

const Login = () => {
    return (
        <div 
            className="h-screen w-full flex flex-col justify-center items-center font-rubik" 
            style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover' }}>
            
            <img className="w-72 mb-12" src={logo} alt="Coderclas Logo" />
            
            <div className="w-full max-w-sm p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
                <p className="text-3xl text-white">Log in</p>
                <p className="text-lg text-white/80 font-light">to start learning</p>
                
                <form method="POST" action="#" className="mt-5 flex flex-col">
                    <label htmlFor="username" className="text-white/80 mb-1">Username</label>
                    <input type="text" name="username" id="username" className="py-3 px-4 rounded-lg border-none mb-3" />

                    <label htmlFor="password" className="text-white/80 mb-1">Password</label>
                    <input type="password" name="password" id="password" className="py-3 px-4 rounded-lg border-none" />
                    
                    <a href="#" className="text-sm text-white/80 mt-1 self-start hover:text-white">Forget Password?</a>

                    <input id="submit" type="submit" value="Login" className="mt-6 cursor-pointer py-3 px-4 rounded-lg border-none text-white bg-blog hover:bg-blog-secondary transition duration-300" />
                </form>
            </div>
        </div>
    );
};

export default Login;

