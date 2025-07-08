import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Usecart } from "../context/Context.jsx";


export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = Usecart();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white shadow-lg transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        w-full sm:w-[500px]`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">My Cart</h2>
        <button
          onClick={onClose}
          className="text-white text-xl font-semibold hover:text-green-400"
        >
          <FaTimes/>
        </button>
      </div>
      <div className="flex flex-col h-[calc(100%-64px)] ">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <FaCartShopping size={80}/>
            <p className="text-xl font-semibold "> your cart in empty</p>
          </div>
        ) : (
          <>
            <ul className="w-full px-2 sm:px-4 flex-1 overflow-y-auto">
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row items-center sm:justify-between border-b border-gray-700 py-2 sm:py-4 gap-2 relative">
                  <button onClick={() => removeFromCart(item._id)} className="absolute right-2 top-2 sm:static sm:-left-1 sm:top-11 text-gray-400 hover:text-red-500"><FaTimes /></button>
                  <div className="flex items-center w-full sm:w-auto">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                    <div className="flex flex-col flex-1 ml-2">
                      <span className="font-semibold text-sm sm:text-base">{item.name}</span>
                      <span className="text-xs text-gray-400">{item.description || ''}</span>
                    </div>
                  </div>
                  <div className="flex w-full sm:w-auto justify-between items-center mt-2 sm:mt-0">
                    <span className="font-semibold text-sm sm:text-base">${item.price?.toFixed(2)} USD</span>
                    <div className="flex items-center border rounded-full px-2 py-1 ml-2">
                      <button onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))} className="px-2 text-lg"><FaMinus /></button>
                      <span className="px-2 select-none">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="px-2 text-lg"><FaPlus /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto p-2 sm:p-4 border-t border-gray-700">
              <div className="flex justify-between py-1 text-xs sm:text-sm">
                <span>Taxes</span>
                <span>$0.00 USD</span>
              </div>
              <div className="flex justify-between py-1 text-xs sm:text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between py-2 text-base sm:text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)} USD</span>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 rounded-full mt-3 sm:mt-4 font-semibold text-sm sm:text-base">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>

    </div>
  );
}
