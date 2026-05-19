import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

import Cards from "../components/Cards";
import shopData from "../Data/ShopData";
import Cart from "../components/Cart";

import { useSelector, useDispatch } from "react-redux";

import { handleShowCart } from "../redux/cartSlice";

const Shop = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { cartItems, showCart } = useSelector(
    (state) => state.cart
  );

  const filteredWatches = shopData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] py-20 px-5">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
        
        {/* HEADING */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif">
            Explore Watches
          </h1>

          <p className="text-gray-500 mt-3">
            Discover premium luxury collections
          </p>
        </div>

        {/* SEARCH + CART */}
        <div className="flex items-center gap-4">
          
          {/* SEARCH */}
          <div className="flex items-center bg-white px-4 py-3 rounded-full shadow-md w-full md:w-[320px]">
            <Search className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Search watches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none px-3 bg-transparent"
            />
          </div>

          {/* CART BUTTON */}
          <div
            className="relative bg-black text-white p-4 rounded-full cursor-pointer"
            onClick={() => dispatch(handleShowCart())}
          >
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </div>

          {/* SHOW CART */}
          {showCart && <Cart />}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        
        {filteredWatches.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 * idx,
            }}
            viewport={{ once: true }}
          >
            <Cards
              id={item.id}
              image={item.image}
              name={item.name}
              brand={item.brand}
              price={item.price}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Shop;