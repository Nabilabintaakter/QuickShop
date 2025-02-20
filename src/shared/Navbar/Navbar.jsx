/* eslint-disable no-unused-vars */
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import Container from "./Container/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shopping-cart.png";
import logoText from "../../assets/LOgo_text-2.png";
import { useCart } from "../../provider/CartProvider";
import { useState, useEffect } from "react";
import { useCategory } from "../../provider/CategoryProvider";

const Navbar = () => {
    const { cartCount } = useCart();
    const [categories, setCategories] = useState([]);
    const [input, setInput] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const { setSelectedCategory } = useCategory();
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSelectCategory = (category) => {
        setInput(category);
        setSelectedCategory(category);
        setShowDropdown(false);
    };
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Error fetching categories:", err));
    }, []);



    const links = (
        <>
            <li><NavLink onClick={scrollToTop} to={'/'} activeClassName="text-blue-500">Home Page</NavLink></li>
            <li><NavLink to="/#products" activeClassName="text-blue-500">Products</NavLink></li>
            <li><NavLink to="#footer" activeClassName="text-blue-500">Contact Us</NavLink></li>
        </>
    );

    return (
        <div className="bg-[#FEC140] w-full">
            <div className="fixed backdrop-blur-md z-50 bg-[#FEC140]/80 w-full">
                <Container>
                    <div className="navbar">
                        {/* Navbar Start */}
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="mr-5 lg:hidden">
                                    <ImMenu className="text-lg" />
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-6 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-7 md:w-8 lg:w-10" src={logo} alt="" />
                                <Link to={'/'}><img className="w-28 lg:w-32 mt-1" src={logoText} alt="" /></Link>
                            </div>
                        </div>

                        {/* Navbar Center */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-black font-medium">
                                {links}
                            </ul>
                        </div>

                        {/* Navbar End */}
                        <div className="navbar-end flex items-center gap-3 md:gap-5">
                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onFocus={() => setShowDropdown(true)}
                                    className="px-3 md:px-4 py-1 md:py-2 rounded-[14px] bg-[#FFFFE7] border-none w-28 md:w-64 text-gray-700 placeholder:text-xs placeholder:md:text-base"
                                />

                                <Link to="/#products">
                                    <FaSearch className="absolute right-2 md:right-3 top-2 md:top-3 text-gray-900 cursor-pointer" /></Link>

                                {/* Dropdown Categories */}
                                {showDropdown && categories.length > 0 && (
                                    <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-b-md mt-1 z-10 shadow-lg">
                                        {categories.map((category, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                                                onClick={() => handleSelectCategory(category)}
                                            >
                                                {category}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Cart Icon */}
                            <div className="relative">
                                <FaShoppingCart size={24} />
                                <span className="absolute -top-[10px] -right-[10px] bg-red-500 text-white text-xs px-[6px] py-[2px] rounded-full">
                                    {cartCount}
                                </span>
                            </div>

                            {/* User Icon */}
                            <FaUserCircle className="text-black text-2xl cursor-pointer" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
