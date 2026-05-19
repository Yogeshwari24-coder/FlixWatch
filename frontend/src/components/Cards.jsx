import React from "react";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {toast} from "react-toastify";

const Cards = ({ id, image, name, brand, price }) => {

  const dispatch = useDispatch();

  return (
    <div>
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#f7f7f7] p-5 rounded-xl shadow-sm"
      >
        <img
          src={image}
          alt=""
          className="w-full h-[280px] object-cover rounded-lg"
        />

        <div className="mt-5">
          
          <h3 className="font-bold">
            {brand}
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            {name}
          </p>

          <div className="flex justify-between items-center mt-5">
            
            <p className="mt-3 text-lg font-semibold">
              {price}
            </p>

            <button
              onClick={() =>
                {dispatch(
                  addToCart({
                    id,
                    image,
                    name,
                    brand,
                    price,
                  })
                );
                toast.success("Item Added")}
              }
              className="bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
            >
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;