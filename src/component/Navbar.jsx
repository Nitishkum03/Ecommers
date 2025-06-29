import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import logoimg from "../assets/logo.png"
import CartDrawer from "./CartDrawer"
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Navbar({ search, setSearch }) {
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
        <Link to="/" className="p-2 rounded-lg flex items-center gap-2">
          <img src={logoimg} alt="" className='w-10' />
          <span className="font-semibold text-xl">Nextcart</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-lg text-[#3d3d3d] ">
        <Link to="/all" className="hover:underline hover:text-white">All</Link>
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
            value={search}
            onChange={e => setSearch(e.target.value)}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Slide-in Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Nextcart</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white rounded-lg hover:text-red-400 "
          >
            <FaX size={15} />
          </button>
        </div>
        <div className="relative p-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full  rounded-md bg-[#1b1b1b] border border-gray-700 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li><Link to="/" className="hover:text-blue-400 hover:underline">Home</Link></li>
          <li><Link to="/all" className="hover:text-blue-400 hover:underline">All</Link></li>
          <li><a href="#" className="hover:text-blue-400 hover:underline">Shop</a></li>
          <li><a href="#" className="hover:text-blue-400 hover:underline">Cart</a></li>
          <li><a href="#" className="hover:text-blue-400 hover:underline">Contact</a></li>
        </ul>
      </div>
   
    </nav>
  );
}
