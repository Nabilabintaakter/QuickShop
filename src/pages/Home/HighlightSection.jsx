import Container from "../../shared/Navbar/Container/Container";
import shop from "../../assets/shop.avif";
import { Link } from "react-router-dom";

const HighlightSection = () => {
    return (
        <section className="bg-gray-900 py-12">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* text */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Elevate Your Shopping Experience
                        </h1>
                        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 px-5 sm:px-0">
                            Discover a curated collection of premium products, tailored for your unique taste.
                            Enjoy seamless shopping with quality you can trust.
                        </p>
                        <div className=" flex gap-2 md:gap-3 justify-center lg:justify-start">
                            <Link to="/#products" className="mt-6 px-5 py-2 md:px-8 md:py-3 bg-yellow-500 text-white text-sm md:text-base rounded-full shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out focus:outline-none">
                                Shop Now!
                            </Link>
                            <Link to="/#products" className="border border-gray-700 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold mt-6 px-5 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full shadow-md transition-all">
                                Explore More
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 h-[200px] md:h-[300px] flex justify-center">
                        <img
                            src={shop}
                            alt="Shopping"
                            className="w-full rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HighlightSection;
