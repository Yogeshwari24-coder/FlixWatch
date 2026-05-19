import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import watches from "../Data/BestSeller";
import brands from "../Data/brands";
import testimonials from "../Data/testimonials";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";






const Home = () => {

  const navigate = useNavigate();

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* NAVBAR */}
      <Nav/>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-5 text-white">
            <h1 className="text-4xl md:text-7xl font-serif leading-tight max-w-3xl">
              Every Second <br /> Defines Your Style
            </h1>

            <p className="mt-5 text-gray-300 max-w-md text-sm md:text-base">
              Elevate your look with luxury watches designed for confidence,
              performance, and timeless sophistication.
            </p>

            <button
              onClick={()=>navigate('/shop')}
             className="mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
              ORDER NOW
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-5">
          <div className="flex flex-col items-center">
            <ShieldCheck size={35} />
            <h3 className="mt-4 text-lg">Extended Warranty</h3>
            <p className="text-gray-400 text-sm mt-2">
              Up to 15 Year Coverage
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Truck size={35} />
            <h3 className="mt-4 text-lg">Free Shipping</h3>
            <p className="text-gray-400 text-sm mt-2">
              Worldwide Delivery
            </p>
          </div>

          <div className="flex flex-col items-center">
            <RotateCcw size={35} />
            <h3 className="mt-4 text-lg">30 Days Return</h3>
            <p className="text-gray-400 text-sm mt-2">
              Return on all items
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-5">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-serif">
            Best Sellers
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {watches.map((item, idx) => (
            <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{y: 0 , opacity:1}}
              transition={{duration: 0.8, delay: 0.5 * idx}}
              viewport={{once: true}}
              key={item.id}>
              <Cards image={item.image} name={item.name} brand={item.brand} price={item.price}/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="grid md:grid-cols-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-black text-white flex items-center justify-center p-10 md:p-20">
          <motion.div 
          initial={{y: 20, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={{duration: 0.7, delay: 0.3}}>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Timeless Luxury On Your Wrist
            </h2>

            <p className="mt-6 text-gray-300 leading-7">
              Discover premium watches crafted with precision, elegance,
              and modern style for every moment that matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20 px-5 bg-[#fafafa]">
        <h2 className="text-center text-3xl md:text-5xl font-serif">
          Brands We Love
        </h2>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 mt-14">
          {brands.map((brand, index) => (
            <motion.h1
              whileHover={{ scale: 1.1 }}
              key={index}
              className="text-2xl md:text-4xl font-bold text-gray-700"
            >
              {brand}
            </motion.h1>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-5">
        <h2 className="text-center text-3xl md:text-5xl font-serif">
          Testimonials
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <motion.div
              initial={{y:20, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration: 0.5, delay: 0.2}}
              whileHover={{ scale: 1.03 }}
              key={item.id}
              className="shadow-lg rounded-2xl overflow-hidden bg-white"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <h1 className="text-3xl font-serif">Flix Watch</h1>

        <p className="text-gray-400 mt-4">
          Crafted for elegance and timeless luxury.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © 2026 All Rights Reserved
        </p>
      </footer>
    </main>
  );
};

export default Home;