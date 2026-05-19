import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  removeFromCart,
  handleShowCart,
} from "../redux/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const subtotal = cartItems.reduce(
  (total, item) =>
    total + Number(item.price.replace("$", "")),
  0
);

const gst = 3/100;
const total = gst + subtotal;

  return (
    
    <section className="min-h-screen absolute md:w-1/2 w-full top-0 right-0 bg-white py-20 px-5 z-50 shadow-2xl">
      
      <div className="w-full mx-auto">

        {/* TOP */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-serif">
            Shopping Cart
          </h1>

          {/* CLOSE */}
          <button
            onClick={() => dispatch(handleShowCart())}
            className="text-3xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <h2 className="text-gray-500">
            Cart is empty
          </h2>
        ) : (
            <>
            <div className="space-y-6">

                {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center justify-between bg-[#f7f7f7] p-5 rounded-2xl"
                >
                    
                    <div className="flex items-center gap-5">
                    <img
                        src={item.image}
                        alt=""
                        className="w-28 h-28 object-cover rounded-xl"
                    />

                    <div>
                        <h2 className="text-2xl font-semibold">
                        {item.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                        {item.price}
                        </p>
                    </div>
                    </div>

                    {/* REMOVE */}
                    <button
                    onClick={() =>
                        {dispatch(removeFromCart(item.id));
                            toast.success("Item Removed")
                        }
                    }
                    className="mt-5 md:mt-0 bg-red-500 text-white px-5 py-2 rounded-full"
                    >
                    Remove
                    </button>
                </div>
                ))}
            </div>
            <div className="px-10 text-lg font-semibold">
                <div className="flex justify-between items-center"><span>Subtotal</span><span>{subtotal}</span></div>
                <div className="flex justify-between items-center"><span>GST</span><span>{gst}</span></div>
                <div className="flex justify-between items-center"><span>Total</span><span>{total}</span></div>
            </div>
            <button className="w-full mt-5 h-10 bg-black text-white rounded-lg text-lg"
            onClick={()=>toast.success("Order Placed!")}>Place Order</button>
          </>
        )}
        
      </div>
    </section>
  );
};

export default Cart;