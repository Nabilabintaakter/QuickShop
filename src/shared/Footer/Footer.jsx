import { FaFacebookF, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/shopping-cart.png";
import logoText from "../../assets/LOgo_text-2.png";
import { Link } from "react-router-dom";
import Container from "../Navbar/Container/Container";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="bg-[#FEC140] w-fit px-4 py-2 flex items-center gap-2 rounded-lg shadow-lg">
                            <img className="w-12" src={logo} alt="Quick Shop Logo" />
                            <Link to={'/'}>
                                <img className="w-36 md:w-40 mt-1" src={logoText} alt="Quick Shop" />
                            </Link>
                        </div>
                        <p className="mt-5 text-sm">
                            Your go-to destination for premium shopping experiences.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-transform duration-300 transform hover:scale-110"
                            >
                                <FaFacebookF size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-400 hover:text-sky-500 transition-transform duration-300 transform hover:scale-110"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-600 transition-transform duration-300 transform hover:scale-110"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-800 transition-transform duration-300 transform hover:scale-110"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>

                    </div>

                    {/* Customer Support */}
                    <div className="flex flex-col lg:items-center">
                        <h3 className="text-lg font-semibold text-white lg:ml-8">Customer Support</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col lg:items-center">
                        <h3 className="text-lg font-semibold text-white lg:ml-2">Quick Links</h3>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact & Payment */}
                    <div className="flex flex-col lg:items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Contact & Payment</h3>
                            <p className="mt-3 text-sm">Email: support@quickshop.com</p>
                            <p className="text-sm">Phone: +123 456 7890</p>
                            <div className="flex space-x-4 mt-4">
                                <FaCcVisa size={30} />
                                <FaCcMastercard size={30} />
                                <FaCcPaypal size={30} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                    © {new Date().getFullYear()} Quick Shop. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
