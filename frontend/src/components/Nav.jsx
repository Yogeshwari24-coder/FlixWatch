import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 shadow-sm">
         <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-serif tracking-widest">
            Flix Watch
            </h1>

            <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <li className="cursor-pointer hover:text-gray-500 transition">
                Home
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition"
              onClick={()=>navigate("/shop")}>
                Shop
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
                Testimonials
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition">
                Contact
            </li>
            </ul>

            <button className=" px-5 py-2 text-sm">
            +91 1234567890
            </button>
            <button className=" px-5 py-2 text-sm bg-black rounded-lg cursor-pointer text-white transition"
            onClick={()=>navigate("/")}>
              SignUp
            </button>
            
         </div>
      </nav>
    </div>
  )
}

export default Nav
