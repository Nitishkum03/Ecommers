import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./Api";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Product not found
      </div>
    );
  }

  // For demo: use product.image for main, and if product.images exists, use as thumbnails, else just show main image
  const thumbnails = product.images || [product.image];
  const colors = product.colors || ["Black", "White", "Blue"];
  const sizes = product.sizes || ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const description = product.description || "60% combed ringspun cotton/40% polyester jersey tee.";

  // Related products: pick 3 random products excluding the current one
  const relatedProducts = products.filter((p) => p.id !== product.id);
  const shuffled = relatedProducts.sort(() => 0.5 - Math.random());
  const related = shuffled.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-4 px-2 md:px-0">
      <div className="max-w-7xl w-full bg-black rounded-2xl flex flex-col md:flex-row p-2 md:p-8 gap-4 md:gap-8">
        {/* Left: Product Image */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full max-w-xs md:w-[400px] md:h-[400px] h-64 object-contain rounded-xl" />
          {/* Thumbnails */}
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-8">
            {thumbnails.map((img, idx) => (
              <img key={idx} src={img} alt="thumb" className="w-14 h-14 md:w-20 md:h-20 object-contain rounded-lg border-2 border-transparent hover:border-blue-500 cursor-pointer" />
            ))}
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col justify-center text-white gap-4 md:gap-6 mt-6 md:mt-0 px-2 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{product.name}</h1>
          <span className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-xl font-semibold w-fit">{product.price}{product.currency ? ` ${product.currency}` : ''}</span>
          <hr className="border-gray-700 my-2" />
          <div>
            <div className="mb-2 font-semibold">COLOR</div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {colors.map((color, idx) => (
                <span key={idx} className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#222] border border-gray-600 text-white text-base cursor-pointer hover:border-blue-500 mb-2 md:mb-0">{color}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 font-semibold">SIZE</div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {sizes.map((size, idx) => (
                <span key={idx} className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#222] border border-gray-600 text-white text-base cursor-pointer hover:border-blue-500 mb-2 md:mb-0">{size}</span>
              ))}
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-2">{description}</div>
          <button className="mt-4 md:mt-6 bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg rounded-full py-3 md:py-4 w-full flex items-center justify-center gap-2 transition-all">
            <span className="text-xl md:text-2xl font-bold">+</span> Add To Cart
          </button>
        </div>
      </div>
      {/* Related Products Section */}
      <div className="w-full max-w-7xl mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-2">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 md:px-0">
          {related.map((rel) => (
            <Link to={`/product/${rel.id}`} key={rel.id} className="bg-black rounded-xl p-4 flex justify-center items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:border-blue-500 border border-transparent">
              <div className="relative w-full flex flex-col items-center">
                <img src={rel.image} alt={rel.name} className="max-h-[180px] w-full object-contain" />
                <div className="absolute bottom-4 gap-2 flex space-x-3 bg-black border p-2 rounded-full text-sm text-white items-center">
                  <span className="text-white px-3 py-1 rounded-full text-base font-semibold">{rel.name}</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-base font-semibold">{rel.price}{rel.currency ? ` ${rel.currency}` : ''}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 