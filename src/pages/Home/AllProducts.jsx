import { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaPlus, FaMinus } from "react-icons/fa";
import Container from "../../shared/Navbar/Container/Container";
import ProductCard from "./ProductCard";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

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
        <section className="py-16 bg-gray-100">
            <Container>
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-wide">
                        <span className="text-yellow-500">Our Products</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                        Explore our handpicked collection, offering top-quality products at unbeatable prices.
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-4">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product?.id} renderStars={renderStars} product={product} setSelectedProduct={setSelectedProduct}></ProductCard>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">Loading products...</p>
                    )}
                    {/* Modal */}
                    {selectedProduct && (
                        <dialog id="product_modal" className="modal" open>
                            <div className="modal-box">
                                {/* Modal Title */}
                                <h3 className="text-lg font-semibold">{selectedProduct?.title}</h3>

                                {/* Product Image & Details */}
                                <div className="flex gap-4 mt-2">
                                    <img
                                        src={selectedProduct?.image}
                                        alt={selectedProduct?.title}
                                        className="w-24 h-24 object-contain border rounded-lg"
                                    />
                                    <div>
                                        <p className="text-lg font-bold text-gray-900">
                                            ${selectedProduct?.price.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-green-500 font-medium">In Stock</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-2">
                                    {selectedProduct?.description}
                                </p>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-3 mt-4">
                                    <button
                                        className="btn btn-sm btn-outline"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-bold">{quantity}</span>
                                    <button
                                        className="btn btn-sm btn-outline"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-2 mt-4">
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            setSelectedProduct(null);
                                            setQuantity(1); // Reset quantity
                                        }}
                                    >
                                        Close
                                    </button>
                                    <button className="btn bg-black text-white">Buy Now</button>
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
