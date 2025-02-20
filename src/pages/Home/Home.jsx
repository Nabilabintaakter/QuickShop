import AllProducts from "./AllProducts";
import FeaturesSection from "./FeaturesSection";
import Header from "./Header";
import HighlightSection from "./HighlightSection";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <HighlightSection></HighlightSection>
            <AllProducts></AllProducts>
            <FeaturesSection></FeaturesSection>
        </div>
    );
};

export default Home;