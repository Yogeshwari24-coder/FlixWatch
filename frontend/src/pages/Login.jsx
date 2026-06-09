import React, { useContext, useState } from 'react'
import login_img from '../assets/login_img.png'
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import { dataContext } from '../context/AuthContext'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const { serverUrl } = useContext(dataContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {

    e.preventDefault()
    setLoading(true)

    try {

      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      )

      console.log(result.data)

      alert("Login successful")

      navigate("/home")

    } catch (error) {

      console.log(error.response?.data || error.message)

      alert(
        error.response?.data?.message || "Login failed"
      )

    } finally {
      setLoading(false)
    }

  }

  return (

    <div className='flex flex-col md:flex-row min-h-screen w-full bg-black p-2'>

      <div className='hidden md:block md:w-[40%] h-[250px] md:h-screen overflow-hidden rounded-xl'>

        <img
          src={login_img}
          className='w-full h-full object-cover'
          alt="login"
        />

      </div>

      <div className='w-full md:w-[60%] bg-[#e6e6e6] md:rounded-tl-[10%] rounded-2xl min-h-screen flex items-center justify-center'>

        <div className='w-full max-w-[500px] px-6 py-10 flex flex-col items-center'>

          <h1 className='text-3xl md:text-4xl text-[#4b4b4b] font-semibold text-center'>
            Welcome Back
          </h1>

          <p className='text-gray-600 text-center mt-2'>
            Ready to continue your shopping?
          </p>

          <p className='font-semibold text-gray-700 text-center'>
            Keep going!
          </p>

          <form
            onSubmit={handleLogin}
            className='mt-10 flex flex-col items-center gap-4 w-full'
          >

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
              disabled={loading}
              className='bg-black text-white text-lg md:text-xl h-12 w-full rounded-xl mt-3 cursor-pointer hover:scale-[1.02] duration-200'
            >
              {loading?(
                <div className='flex justify-center items-center'>
                  <div className='h-5 w-5 border-2 rounded-full border-t-transparent animate-spin'></div>
                </div>
              ):("Log In")}
            </button>

          </form>

          <div
            className='mt-8 cursor-pointer flex flex-wrap justify-center text-center'
            onClick={() => navigate("/")}
          >

            <span>Don't have an account?</span>

            <span className='text-blue-800 ml-2'>
              Sign Up
            </span>

          </div>

          <div className='flex items-center gap-2 mt-6 cursor-pointer bg-white px-5 py-3 rounded-xl shadow-md hover:scale-105 duration-200'>

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

export default Login