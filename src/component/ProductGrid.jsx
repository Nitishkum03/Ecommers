const products = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    price: "$20.00",
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75", // Replace with actual image paths
    size: "large",
  },
  {
    id: 2,
    name: "Acme Drawstring Bag",
    price: "$12.00",
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=640&q=75",
    size: "small",
  },
  {
    id: 3,
    name: "Acme Cup",
    price: "$15.00",
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=640&q=75",
    size: "small",
  },
];
export default function ProductGrid() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl max-h-full mx-auto ">
        {/* Left Large Item */}
        <div className="md:col-span-2 bg-black rounded-xl p-2 flex justify-center items-center ">
          <ProductCard product={products[0]} />
        </div>

        {/* Right Two Small Items */}
        <div className="flex flex-col gap-4 border-blue-500">
          <div className="bg-black rounded-xl p-4 flex justify-center items-center hover:border-blue-400">
            <ProductCard product={products[1]} className=""/>
          </div>
          <div className="bg-black rounded-xl p-4 flex justify-center items-center">
            <ProductCard product={products[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
function ProductCard({ product }) {
  return (
    <div className="relative border-amber-50 w-full flex flex-col items-center">
      <img src={product.image} alt={product.name} className="max-h-75 w-3xl object-contain" />

      <div className="absolute bottom-4 flex space-x-2 bg-black px-4 py-2 rounded-full text-sl text-white items-center">
        <span>{product.name}</span>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xm font-semibold">
          {product.price}
        </span>
      </div>
    </div>
  );
}
