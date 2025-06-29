import { Link } from "react-router-dom";
import { products } from "./Api";

export default function ProductGrid({ search }) {
  // Filter products by search query
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  // Pick 3 random related products from filtered list
  const related = filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1500px] max-h-full mx-auto w-full">
        {/* Left Large Item */}
        {filteredProducts[0] && (
          <div className="md:col-span-2 bg-black rounded-xl p-2 flex justify-center items-center ">
            <Link to={`/product/${filteredProducts[0].id}`} className="w-full">
              <ProductCard product={filteredProducts[0]} />
            </Link>
          </div>
        )}
        {/* Right Two Small Items */}
        <div className="flex flex-col gap-4 ">
          {filteredProducts[1] && (
            <div className="bg-black rounded-xl p-4 flex justify-center items-center hover:border-blue-400">
              <Link to={`/product/${filteredProducts[1].id}`} className="w-full">
                <ProductCard product={filteredProducts[1]} />
              </Link>
            </div>
          )}
          {filteredProducts[2] && (
            <div className="bg-black rounded-xl p-4 flex justify-center items-center">
              <Link to={`/product/${filteredProducts[2].id}`} className="w-full">
                <ProductCard product={filteredProducts[2]} />
              </Link>
            </div>
          )}
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
function ProductCard({ product }) {
  return (
    <div className="relative border-amber-50 w-full flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:border-blue-500">
      <img src={product.image} alt={product.name} className="max-h-[300px] w-full object-contain" />
      <div className="absolute bottom-4 gap-2 flex space-x-3 bg-black border p-2 rounded-full text-sm text-white items-center">
        <span className="text-white px-3 py-1 rounded-full text-base font-semibold">{product.name}</span>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-base font-semibold">
          {product.price}
        </span>
      </div>
    </div>
  );
}
