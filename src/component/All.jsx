import React from "react";
import { Link } from "react-router-dom";
import { products } from "./Api";

function ProductCard({ product }) {
  return (
    <div className="relative border-amber-50 w-full flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:border-blue-500">
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

export default function All({ search }) {
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1500px] max-h-full mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-black rounded-xl p-4 flex justify-center items-center">
            <Link to={`/product/${product.id}`} className="w-full">
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 