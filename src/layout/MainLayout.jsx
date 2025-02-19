import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;