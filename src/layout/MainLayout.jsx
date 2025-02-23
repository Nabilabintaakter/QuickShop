import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="font-roboto">
            <div className="h-[64px]"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;