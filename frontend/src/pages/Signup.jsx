import React, { useContext, useState } from 'react'
import signup_img from '../assets/signup_img.png'
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import { dataContext } from '../context/AuthContext'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/Firebase'

const Signup = () => {

  const navigate = useNavigate()

  const { serverUrl } = useContext(dataContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {

    e.preventDefault()

    try {

      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          name,
          email,
          password
        },
        {
          withCredentials: true
        }
      )

      if(result.status === 201){

        alert("Signup Successfully")

        navigate("/home")

      }

    } catch (error) {

      console.log(error.response?.data || error.message)

      alert(
        error.response?.data?.message || "Signup failed"
      )

    }

  }

  const googleSignup = async () => {

    try {

      const response = await signInWithPopup(
        auth,
        provider
      )

      const token = await response.user.getIdToken()

      const result = await axios.post(
        `${serverUrl}/api/auth/googlelogin`,
        {
          token
        },
        {
          withCredentials: true
        }
      )

      console.log(result.data)

      if(result.status === 200){

        alert("Signup Successfully")

        navigate("/")

      }

    } catch (error) {

      console.log(
        error.response?.data || error.message
      )

      alert(
        error.response?.data?.message ||
        "Google Signup failed"
      )

    }

  }

  return (

    <div className='flex flex-col md:flex-row min-h-screen w-full bg-black p-2'>

      <div className='hidden md:block md:w-[40%] h-[250px] md:h-screen overflow-hidden rounded-xl'>

        <img
          src={signup_img}
          className='w-full h-full object-cover'
          alt="signup"
        />

      </div>

      <div className='w-full md:w-[60%] bg-[#e6e6e6] md:rounded-tl-[10%] rounded-2xl min-h-screen flex items-center justify-center'>

        <div className='w-full max-w-[500px] px-6 py-10 flex flex-col items-center'>

          <h1 className='text-3xl md:text-4xl text-[#4b4b4b] font-semibold text-center'>
            Create Account
          </h1>

          <form
            onSubmit={handleSignup}
            className='mt-10 flex flex-col items-center gap-4 w-full'
          >

            <input
              type="text"
              placeholder='Full Name'
              required
              className='w-full h-14 px-5 rounded-xl outline-none bg-white'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="email"
              placeholder='Email Address'
              required
              className='w-full h-14 px-5 rounded-xl outline-none bg-white'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              placeholder='Password'
              required
              className='w-full h-14 px-5 rounded-xl outline-none bg-white'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              type='submit'
              className='bg-black text-white text-lg md:text-xl h-12 w-full rounded-xl mt-3 cursor-pointer hover:scale-[1.02] duration-200'
            >
              Sign Up
            </button>

          </form>

          <div
            className='mt-8 cursor-pointer flex flex-wrap justify-center text-center'
            onClick={() => navigate("/login")}
          >

            <span>Already have an account?</span>

            <span className='text-blue-800 ml-2'>
              Log In
            </span>

          </div>

          <div
            className='flex items-center gap-2 mt-6 cursor-pointer bg-white px-5 py-3 rounded-xl shadow-md hover:scale-105 duration-200'
            onClick={googleSignup}
          >

            <img
              src={google}
              className='h-6'
              alt="google"
            />

            <span>Sign In with Google</span>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Signup