import React from 'react';
import { useCart } from './content';

const CartPage = () => {
    const { cartItems, updateQuantity, totalQuantity, totalAmount } = useCart();

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h1>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-6 w-3/5">
                            <img
                                src={item.image} 
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div>
                                <p className="font-medium text-lg text-gray-800">{item.name}   </p>
                                <p className="text-sm text-gray-600 p-2">   ₹{item.price} per unit</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button
                                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition-colors"
                                onClick={() => updateQuantity(item.id, -1)}
                            >
                                -
                            </button>
                            <span className="font-medium text-lg">{item.quantity}</span>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full transition-colors"
                                onClick={() => updateQuantity(item.id, 1)}
                            >
                                +
                            </button>
                        </div>
                        <p className="font-medium text-lg text-gray-800 p-2">₹{item.price * item.quantity}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg flex flex-col justify-between items-center">
                <p className="font-medium text-xl text-gray-800">Total Quantity: {totalQuantity}</p>
                <p className="font-medium text-xl text-gray-800">Total Amount: ₹{totalAmount}</p>
            </div>

            <div className="mt-6 flex justify-center gap-6">
                <button
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
                    onClick={() => console.log('Proceeding to Checkout')}
                >
                    Proceed to Checkout
                </button>
                
            </div>
        </div>
    );
};

export default CartPage;
