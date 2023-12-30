import React from 'react';
import { FaEnvelope, FaPhone, FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './AboutUs.css'; 
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


const AboutUs = () => {
    return (
        <>
        <Navbar/>
        <div className="about-us-container">
            <div className="about-us-content">
                <h1>About Us</h1>
                <p>Welcome to our online recruitment platform...</p>

                <div className="team-section">
                    <h2>Team Members</h2>
                    <ul>
                        <li>Yishak Ocha</li>
                        <li>Ermias G/kidan</li>
                        <li>Eyob Bekele</li>
                        <li>Lijalem Mekuriaw</li>
                    </ul>
                </div>

                <div className="team-leader-section">
                    <h2>Team Leader</h2>
                    <p>Mulualem Yeshambel</p>
                </div>

                <div className="contact-section">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <FaEnvelope /> Email: mulualemyeshambel@gmail.com
                        </li>
                        <li>
                            <FaPhone /> Phone: +251970845365
                        </li>
                        <li>
                            <FaTelegram /> Telegram: <a href="https://t.me/MuleMuller" target="_blank" rel="noopener noreferrer">MuleMuller</a>
                        </li>
                        <li>
                            <FaTwitter /> Twitter: <a href="https://twitter.com/muller" target="_blank" rel="noopener noreferrer">@muller</a>
                        </li>
                        <li>
                            <FaFacebook /> Facebook: <a href="https://facebook.com/MuleMuller" target="_blank" rel="noopener noreferrer">MuleMuller</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AboutUs;
