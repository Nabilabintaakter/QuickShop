import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-roboto">
            <div className="h-[64px]"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;