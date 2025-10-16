import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import Typed from 'typed.js';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing images
import headerImage from '../assets/images/headerImage.webp';
import courseThumbnail from '../assets/images/course.webp';
import pocketFriendlyCourses from '../assets/images/pocketFriendlyCourses.webp';
import highQualityLectures from '../assets/images/highQualityLectures.webp';
import detailedExplanations from '../assets/images/detailedExplanations.webp';
import practiceProblems from '../assets/images/practiceProblems.webp';
import industryCurriculum from '../assets/images/industryCurriculum.webp';
import lifetimeAccess from '../assets/images/lifetimeAccess.webp';
import doubtSupport from '../assets/images/doubtSupport.webp';
import certificate from '../assets/images/certificate.webp';
import circleDp from '../assets/images/circle-dp.webp';
import youtube from '../assets/images/youtube.webp';
import instagram from '../assets/images/instagram.webp';
import linkedin from '../assets/images/linkedin.webp';
import githubDark from '../assets/images/github-dark.webp';

const Home = () => {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Minutes!", "Seconds!"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        };
        const typed = new Typed(typedTextRef.current, options);
        return () => typed.destroy();
    }, []);

    const advantages = [
        { img: pocketFriendlyCourses, text: "Pocket-Friendly Courses" },
        { img: highQualityLectures, text: "HD Videos & Crystal clear audios" },
        { img: detailedExplanations, text: "Intuitive & Detailed Explanations" },
        { img: practiceProblems, text: "Practice codes, real time feedback" },
        { img: industryCurriculum, text: "Industry vetted curriculum" },
        { img: lifetimeAccess, text: "Lifetime access, anytime anywhere" },
        { img: doubtSupport, text: "Unlimited doubt support" },
        { img: certificate, text: "Certificate of completion" },
    ];

    const socialLinks = [
        { href: "https://www.youtube.com/@coderclas", img: youtube, alt: "Youtube" },
        { href: "https://www.instagram.com/coderclas/", img: instagram, alt: "Instagram" },
        { href: "https://www.linkedin.com/in/illunise", img: linkedin, alt: "Linkedin" },
        { href: "https://github.com/illunise", img: githubDark, alt: "Github" },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Coding Career <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blog-secondary to-blog">Turbocharged in <span ref={typedTextRef}></span></span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            <b>Unlock Your Coding</b> Potential: Budget-friendly Courses, Interactive Content, Expert Instructors, Real Projects & Assignments!
                        </p>
                        <a href="#courses" className="mt-8 inline-block px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blog-secondary to-blog">Explore Courses</a>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img src={headerImage} alt="Working on Laptop" className="mx-auto" />
                    </div>
                </section>

                {/* Journey Section */}
                <section className="my-16 mx-4 md:mx-auto max-w-4xl p-8 rounded-2xl bg-gradient-to-r from-blog-secondary to-blog text-white">
                    <h2 className="text-3xl font-bold text-center mb-6">Our journey so far</h2>
                    <div className="flex justify-around items-center">
                        <div className="text-center">
                            <h4 className="text-4xl font-bold">4.7⭐️</h4>
                            <p>Course ratings</p>
                        </div>
                        <div className="border-r border-white/50 h-16"></div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold">100,000+</h4>
                            <p>Enrollments</p>
                        </div>
                        <div className="border-r border-white/50 h-16"></div>
                        <div className="text-center">
                            <h4 className="text-4xl font-bold">150+</h4>
                            <p>Countries</p>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section id="courses" className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">What would you like to <span className="text-blog">Learn?</span></h2>
                        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
                            <Link to="/payment">
                                <img className="w-full" src={courseThumbnail} alt="Course Thumbnail" />
                                <div className="p-6">
                                    <p className="inline-block px-3 py-1 text-xs font-bold text-green-600 border-2 border-green-600 rounded-full">BEGINNER TO ADVANCED 🔥🔥🔥</p>
                                    <h3 className="mt-4 text-2xl font-bold">DSA + Development Master Course <i>@Supreme</i> Batch</h3>
                                    <hr className="my-4 border-gray-200 dark:border-gray-700 w-3/4 mx-auto" />
                                    <div className="flex justify-center items-center space-x-4">
                                        <p className="text-2xl font-bold text-blog">₹5199</p>
                                        <p className="text-lg line-through text-gray-500">₹12,999</p>
                                        <p className="px-3 py-1 text-sm font-bold text-white bg-green-500 rounded-md">60% off</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Advantages Section */}
                <section className="py-20 bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold">Coderclas Advantages</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Discover More, Spend Less: Learn Beyond Limits for the Price of a Pizza 🍕</p>
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {advantages.map((adv, index) => (
                                <div key={index} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-4 transition duration-300 hover:bg-blog hover:text-white transform hover:scale-105">
                                    <img src={adv.img} alt="" className="w-16 h-16"/>
                                    <span className="font-medium text-center">{adv.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Instructor Section */}
                <section id="instructor" className="py-20 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-4xl font-bold">Meet your <span className="text-blog">Instructor</span></h2>
                            <a href="/about" className="px-6 py-3 rounded text-white font-bold bg-blog hover:bg-blog-secondary transition">Know More</a>
                        </div>
                         <hr className="border-gray-200 dark:border-gray-700" />
                        <div className="mt-12">
                            <img src={circleDp} alt="Manish Kushwaha" className="w-64 h-64 rounded-full mx-auto" />
                            <h3 className="mt-6 text-3xl font-bold">Manish Kushwaha</h3>
                            <p className="text-xl text-gray-500 dark:text-gray-400">Founder, CoderClas</p>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-justify border border-dashed border-gray-400 p-6 rounded-xl">
                                Meet <span className="text-blog italic font-semibold">Manish Kushwaha</span>, a dynamic individual driven by an insatiable curiosity to explore the ever-evolving world of technology.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Social Section */}
                <section id="social" className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold">Join our Coding Family</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Come by and connect with us on the following links.</p>
                        <div className="mt-12 flex justify-center space-x-8">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noreferrer" className="w-16 h-16 transition-transform duration-300 hover:scale-110">
                                    <img src={link.img} alt={link.alt} className="shadow-lg rounded-full" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;