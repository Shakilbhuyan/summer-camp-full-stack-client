import React from 'react';
import { FaFacebook, FaLinkedinIn , FaInstagram} from 'react-icons/fa';
import logo from '../../../assets/12logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-yellow-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/4 lg:w-1/6">
                        <img src={logo} alt="Logo" className="h-20" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 text-center mt-4 md:mt-0">
                        <p className="text-4xl">LanguageLighthouse</p>
                    </div>
                    <div className="w-full md:w-1/4 lg:w-1/6 text-center mt-4 md:mt-0">
                        <p className="text-white text-sm">&copy; 2023 Copy Right</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-4">
                    <a href="#" className="text-blue-400 hover:text-white mx-2">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#" className="text-yellow-50 hover:text-white mx-2">
                        <FaLinkedinIn></FaLinkedinIn>
                    </a>
                    <a href="#" className="text-red-400 hover:text-white mx-2">
                        <FaInstagram></FaInstagram>
                    </a>

                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm">Contact: your@email.com</p>
                    <p className="text-gray-400 text-sm">123 Main St, City, Country</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;