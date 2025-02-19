import Container from "../../shared/Navbar/Container/Container";

const Header = () => {
    return (
        <section
            className="flex min-h-[70vh] md:min-h-[65vh] lg:h-[70vh] w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Rect Light.svg')" }}
        >
            <Container>
                <div className="flex flex-col w-full">
                    <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] mx-auto text-center h-full">
                        <div className="w-full bg-white/85 px-4 py-6 md:px-6 md:py-8 rounded-tr-4xl rounded-b-4xl shadow-lg">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                Welcome to <span className="text-yellow-500">Quick Shop</span>
                            </h1>
                            <h2 className="mt-2 sm:mt-3 md:mt-4 md:text-lg lg:text-2xl font-semibold text-gray-700 tracking-wide">
                                The Ultimate Shopping Experience Awaits
                            </h2>
                            <p className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 font-light">
                                Browse our exclusive collection of high-quality products, designed to cater to your every need. Enjoy seamless shopping and find what you are looking for with ease.
                            </p>
                            <button className="mt-5 sm:mt-6 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-yellow-500 text-white text-xs sm:text-sm md:text-base rounded-full shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out focus:outline-none">
                                Start Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Header;
