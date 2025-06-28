import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import logoimg from "../assets/logo.png"
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpens , setCartOpens] = useState(false);

  return (
    <nav className="bg-[1b1b1b] text-white p-4 flex items-center justify-between relative">
      <button
              className="md:hidden top-4 border  left-5 z-50 p-4 rounded-md shadow-md"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
      <div className="flex items-center space-x-2 gap-7">
        <div className="p-2 rounded-lg flex items-center gap-5">
          <img src={logoimg} alt="" className='w-10' />
          <span className="font-semibold text-xl">Acme Store</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-lg text-[#3d3d3d] ">
        <a href="#" className="hover:underline hover:text-white">All</a>
        <a href="#" className="hover:underline hover:text-white">Shirts</a>
        <a href="#" className="hover:underline hover:text-white">Stickers</a>
      </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full h-10 rounded-md bg-[#1b1b1b] border border-gray-700 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
          <button className='bg-[1b1b1b] justify-center hover:bg-black p-4 border rounded-lg cursor-pointer'
          onClick={()=> setCartOpens(true)}
          >
             <FaShoppingCart />

          </button>
          
      </div>
      <CartDrawer isOpen={cartOpens} onClose={() => setCartOpens(false)}/>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-11/12 rounded-md bg-[#272323] border border-gray-700 px-4 py-2 text-sm placeholder-gray-400"
          />
          <a href="#" className="hover:underline">All</a>
          <a href="#" className="hover:underline">Shirts</a>
          <a href="#" className="hover:underline">Stickers</a>
        </div>
      )}
    </nav>
  );
}
