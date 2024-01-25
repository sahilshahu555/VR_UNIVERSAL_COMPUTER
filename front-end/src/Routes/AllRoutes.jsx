import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Auth/Login"
import Signup from "../Auth/Signup"
import About from "../Pages/About"
import Contacts from "../Pages/Contacts"
import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import Services from "../Pages/Services"


const AllRoutes = () => {
  return (
    <div >
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes