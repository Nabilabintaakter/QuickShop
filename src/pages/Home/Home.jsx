import { useLocation } from "react-router-dom";
import AllProducts from "./AllProducts";
import FeaturesSection from "./FeaturesSection";
import Header from "./Header";
import HighlightSection from "./HighlightSection";
import { useEffect } from "react";


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);
    return (
        <div>
            <Header></Header>
            <HighlightSection></HighlightSection>
            <section id="products">
                <AllProducts></AllProducts>
            </section>
            <FeaturesSection></FeaturesSection>
        </div>
    );
};

export default Home;