import Container from "../../shared/Navbar/Container/Container";

const Header = () => {
    return (
        <section
            className="flex h-[80vh] md:h-[70vh] w-full justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Colored Shapes.svg')" }}
        >
            <Container>
                <div className="flex flex-col w-full">
                    <div className="w-[95%] md:w-[75%] lg:w-[70%] mx-auto text-center">
                        <div className="w-full bg-white bg-opacity-80 px-3 py-8 rounded-xl shadow-lg">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                Welcome to <span className="text-yellow-500">Quick Shop</span>
                            </h1>
                            <h2 className="mt-4 md:text-xl lg:text-2xl font-semibold text-gray-700 tracking-wide">
                                The Ultimate Shopping Experience Awaits
                            </h2>
                            <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-600 font-light">
                                Browse our exclusive collection of high-quality products, designed to cater to your every need. Enjoy seamless shopping and find what you are looking for with ease.
                            </p>
                            <button className="mt-6 px-5 py-2 md:px-8 md:py-3 bg-yellow-500 text-white text-sm md:text-base rounded-full shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out focus:outline-none">
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
