import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Container from "../../shared/Navbar/Container/Container";
import ProductCard from "./ProductCard";
import { useCart } from "../../provider/CartProvider";
import { useCategory } from "../../provider/CategoryProvider";
import { MdPlayArrow } from "react-icons/md";
import toast from "react-hot-toast";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const { selectedCategory, setSelectedCategory } = useCategory();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();
    const handleViewAll = () => {
        setSelectedCategory("");
    };
    const handleAddToCart = () => {
        addToCart(selectedProduct); 
        toast.success(`${selectedProduct.title} has been added to your cart!`, {
            position: "top-right",
            duration: 3000, 
        });
    };
    useEffect(() => {
        const url = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : "https://fakestoreapi.com/products";
    
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(err => toast.error(`Error fetching products: ${err.message}`));
    }, [selectedCategory]);
    

    // Function to generate star rating
    const renderStars = (rating) => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) =>
            index < Math.round(rating) ? (
                <FaStar key={index} className="text-yellow-400" />
            ) : (
                <FaRegStar key={index} className="text-gray-400" />
            )
        );
    };

    return (
        <section className="py-8 md:py-16 bg-gray-100">
            <Container>
                {/* Section Title */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-wide">
                        <span className="text-yellow-500">Our Products</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                        Explore our handpicked collection, offering top-quality products at unbeatable prices.
                    </p>
                </div>
                <div className="mb-4">
                    <button
                        onClick={handleViewAll}
                        className="px-5 py-2 md:px-8 md:py-3 bg-white text-gray-900 text-sm md:text-base rounded-md shadow-md hover:bg-gray-100 transition-all duration-200 ease-in-out focus:outline-none flex items-center gap-1"
                    >
                        View All <MdPlayArrow className="text-xl" />
                    </button>

                </div>
                {/* Products section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[10px]">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product?.id} renderStars={renderStars} product={product} setSelectedProduct={setSelectedProduct}></ProductCard>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">Loading products...</p>
                    )}
                    {/* Modal */}
                    {selectedProduct && (
                        <dialog id="product_modal" className="modal modal-open">
                            <div className="modal-box w-[90%] max-w-3xl rounded-2xl p-6 bg-white shadow-lg">
                                {/* Modal Content */}
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    {/* Left: Image */}
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="w-52 lg:w-72 lg:h-72 h-52 object-contain rounded-xl"
                                    />

                                    {/* Right: Details */}
                                    <div className="flex-1">
                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-gray-900">{selectedProduct.title}</h3>

                                        {/* Rating + Stock */}
                                        <div className="flex items-center gap-2 mt-3">
                                            <div className="flex items-center space-x-1">
                                                {renderStars(selectedProduct?.rating?.rate || 0)}
                                                <span className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                                                    {selectedProduct?.rating?.rate?.toFixed(1)}
                                                </span>
                                                <span className="text-gray-500 text-xs md:text-sm ml-2">
                                                    ({selectedProduct?.rating?.count} Reviews)
                                                </span>
                                            </div>
                                            <span className="text-green-600 text-sm font-medium ml-2"> | In Stock</span>
                                        </div>

                                        {/* Price */}
                                        <p className="text-2xl font-bold text-gray-800 mt-2">${selectedProduct.price.toFixed(2)}</p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mt-2 ">
                                            {selectedProduct.description}
                                        </p>

                                        {/* Buttons */}
                                        <div className="mt-6 flex gap-4">
                                            <button
                                                className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
                                                onClick={() => setSelectedProduct(null)}
                                            >
                                                Cancel
                                            </button>
                                            <button onClick={handleAddToCart} className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-900">
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default AllProducts;
