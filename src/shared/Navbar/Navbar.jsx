import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import Container from "./Container/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/shopping-cart.png";
import logoText from "../../assets/LOgo_text-2.png";

const Navbar = () => {
    const links = <>
        <li><Link to={'/'}>Home Page</Link></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">More Options</a></li>
    </>;

    return (
        <div className=" bg-[#FEC140] w-full">
            <div className=" fixed backdrop-blur-md z-50 bg-[#FEC140]/80 w-full">
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
                            <div className=" flex items-center gap-2">
                                <img className="w-7 md:w-8" src={logo} alt="" />
                                <Link to={'/'}><img className="w-28 mt-1" src={logoText} alt="" /></Link>
                            </div>
                        </div>

                        {/* Navbar Center */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-black font-medium">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end flex items-center gap-5">
                            {/* Search Bar */}
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="px-4 py-2 rounded-[14px] bg-[#FFFFE7] border-none w-64 text-gray-700 placeholder:text-sm"
                                />
                                <FaSearch className="absolute right-3 top-3 text-gray-900 cursor-pointer" />
                            </div>
                            <FaSearch className="block md:hidden text-gray-900 cursor-pointer" />
                            {/* Cart Icon */}
                            <div className="relative cursor-pointer">
                                <FaShoppingCart className="text-black text-xl" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                    0
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
