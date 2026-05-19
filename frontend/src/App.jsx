import Home from "./pages/Home"
import Login from "./pages/Login"
import Shop from "./pages/Shop"
import Signup from "./pages/Signup"
import {Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify"


function App() {
  
  return (
    <>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shop" element={<Shop/>}/>
       </Routes>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
