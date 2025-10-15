import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import circleDp from '../assets/images/circle-dp.webp';

const About = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <Navbar />
            <section className="pt-32 pb-20 container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold">Meet your <span className="text-blog">Instructor</span></h1>
                <hr className="my-8 border-gray-200 dark:border-gray-700 w-1/4 mx-auto" />
                <div className="mt-12 flex flex-col items-center">
                    <img src={circleDp} alt="Manish Kushwaha" className="w-72 h-72 rounded-full shadow-lg" />
                    <h2 className="mt-8 text-4xl font-bold">Manish Kushwaha</h2>
                    <p className="mt-2 text-2xl text-gray-500 dark:text-gray-400 font-bold">Founder, CoderClas</p>
                    <div className="mt-8 max-w-3xl text-lg text-justify border border-dashed border-gray-400 p-8 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <p>
                            Meet <span className="text-blog italic font-semibold">Manish Kushwaha</span>, a dynamic individual driven by an insatiable curiosity to explore
                            the ever-evolving world of technology. With a passion for coding and a
                            deep-rooted love for teaching, Manish stands out as a proficient coder
                            and a dedicated mentor.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;

