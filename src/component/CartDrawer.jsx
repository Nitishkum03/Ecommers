import { FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function CartDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">My Cart</h2>
        <button
          onClick={onClose}
          className="text-white text-xl font-semibold hover:text-blue-400"
        >
          <FaTimes/>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-[calc(100%-64px)]">
       <FaCartShopping size={80}/>
        <p className="text-lg font-medium">Your cart is empty.</p>
      </div>

    </div>
  );
}
