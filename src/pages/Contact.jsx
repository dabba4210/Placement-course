import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import contactBg from '../assets/images/contact_bg.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // --- Replace with your EmailJS credentials ---
        const serviceID = 'service_i82vjum';
        const templateID = 'template_3fg4t2s';
        const userID = 'P9hTR5wbjrVH4nMg9';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: '',
                });
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navbar />
            <div className="relative pt-20">
                <div className="h-[60vh] bg-black">
                    <div
                        className="h-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${contactBg})` }}>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-6xl font-bold">Get in Touch</h1>
                        <p className="mt-2 text-lg">The Ultimate Guide To Ace SDE Interviews.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto -mt-20 mb-20 relative z-10 p-4">
                <div className="flex flex-col md:flex-row shadow-2xl">
                    <div className="w-full md:w-2/3 bg-gray-50 dark:bg-gray-800 p-8">
                        <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded border-2 border-transparent focus:border-blog focus:outline-none" />
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded border-2 border-transparent focus:border-blog focus:outline-none" />
                                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded border-2 border-transparent focus:border-blog focus:outline-none" />
                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded border-2 border-transparent focus:border-blog focus:outline-none" />
                            </div>
                            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded border-2 border-transparent focus:border-blog focus:outline-none mb-6"></textarea>
                            <button type="submit" className="px-8 py-3 rounded text-white font-bold bg-blog hover:bg-blog-secondary transition float-right">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/3 bg-blog text-white p-8 flex flex-col justify-center items-center text-center space-y-8">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <div>
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl bg-black/20 rounded-lg">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg>
                            </div>
                            <a href="mailto:coderclass2022@gmail.com" className="text-lg">coderclass2022@gmail.com </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;