import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import courseImage from '../assets/images/course.webp'; // Your course image

const Payment = () => {
    const navigate = useNavigate();

    // This function will call your backend to start the payment process
    const handlePayment = async () => {
        try {
            // IMPORTANT: You need to create this backend endpoint.
            // This is just a placeholder for your actual API call.
            const response = await fetch('http://localhost:4000/api/payment', { // Example URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 5199,
                    courseName: 'DSA + Development Master Course',
                }),
            });

            const data = await response.json();

            if (data.redirectUrl) {
                // Redirect the user to the PhonePe payment page
                window.location.href = data.redirectUrl;
            } else {
                alert('Payment initiation failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Could not connect to the payment server. Please try again later.');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-6 text-center">
                <div className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
                    <img src={courseImage} alt="Course Thumbnail" className="w-full rounded-md mb-6" />
                    
                    <div className="text-left mb-6">
                        <h2 className="text-2xl font-bold">DSA + Development Master Course</h2>
                        <p className="text-gray-500">@Supreme Batch</p>
                    </div>

                    <div className="flex justify-between items-center border-t border-b border-gray-200 dark:border-gray-700 py-4 my-4">
                        <span className="text-lg">Total Amount</span>
                        <span className="text-2xl font-bold text-blog">₹5199</span>
                    </div>

                    <button 
                        onClick={handlePayment} 
                        className="w-full mt-4 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blog-secondary to-blog hover:scale-105 transition-transform duration-300">
                        Proceed to Pay
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Payment;