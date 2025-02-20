/* eslint-disable react/prop-types */

const ProductCard = ({ product, renderStars, setSelectedProduct }) => {
    return (
        <>
            {/* Product Card */}
            <div
                className="bg-white rounded-sm p-3 md:p-4 hover:shadow-2xl transition cursor-pointer"
                onClick={() => setSelectedProduct(product)}
            >
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-40 object-contain mx-auto mb-4"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                    {product?.title}
                </h3>
                <p className="text-yellow-500 text-xl font-bold mt-2">
                    ${product?.price.toFixed(2)}
                </p>

                {/* Rating System */}
                <div className="flex items-center mt-2 space-x-1">
                    {renderStars(product?.rating?.rate || 0)}
                    <span className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                        {product?.rating?.rate?.toFixed(1)}
                    </span>
                    <span className="text-gray-500 text-xs md:text-sm ml-2">
                        ({product?.rating?.count} Reviews)
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProductCard;