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

                {/* Products section */}
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
                       <dialog id="product_modal" className="modal modal-open">
                       <div className="modal-box w-[90%] max-w-xl rounded-2xl p-6 bg-white shadow-lg">
                           {/* Modal Content */}
                           <div className="flex flex-col md:flex-row items-center gap-6">
                               {/* Left: Image */}
                               <img
                                   src={selectedProduct.image}
                                   alt={selectedProduct.title}
                                   className="w-40 h-40 object-contain rounded-xl"
                               />
           
                               {/* Right: Details */}
                               <div className="flex-1">
                                   {/* Title */}
                                   <h3 className="text-xl font-semibold text-gray-900">{selectedProduct.title}</h3>
           
                                   {/* Rating + Stock */}
                                   <div className="flex items-center gap-2 mt-1">
                                       <span className="flex text-yellow-500">
                                           {[...Array(5)].map((_, i) => (
                                               <FaStar key={i} className="text-lg" />
                                           ))}
                                       </span>
                                       <span className="text-gray-500 text-sm">({selectedProduct.rating.count} Reviews)</span>
                                       <span className="text-green-600 text-sm font-medium ml-2"> | In Stock</span>
                                   </div>
           
                                   {/* Price */}
                                   <p className="text-2xl font-bold text-gray-800 mt-2">${selectedProduct.price.toFixed(2)}</p>
           
                                   {/* Description */}
                                   <p className="text-gray-600 text-sm mt-2 ">
                                       {selectedProduct.description}
                                   </p>
           
                                   {/* Quantity Selector */}
                                   <div className="flex items-center gap-4 mt-4">
                                       <button
                                           className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200"
                                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                       >
                                           <FaMinus />
                                       </button>
                                       <span className="text-lg font-bold">{quantity}</span>
                                       <button
                                           className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200"
                                           onClick={() => setQuantity(quantity + 1)}
                                       >
                                           <FaPlus />
                                       </button>
                                   </div>
           
                                   {/* Buttons */}
                                   <div className="mt-6 flex gap-4">
                                       <button
                                           className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
                                           onClick={() => setSelectedProduct(null)}
                                       >
                                           Close
                                       </button>
                                       <button className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-900">
                                           Buy Now
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
