import { useState } from "react"
import { Link } from "react-router-dom"
import VrImage from "../Images/vr.png"

const Navbar = () => {
  const [flage,setFlage]=useState(false)
  return (
    <div className="lg:p-0.5  z-10 bg-black  relative group cursor-pointer">
    <div
        className="animate-pulse absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-400 rounded-lg blur opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-2000">
    </div>
    <div className=" relative  bg-black   leading-none  ">
   {/*  */}

    <div className="flex p-0.5  justify-around items-center bg-black text-white ">
      <div className=" w-32     lg:w-24  ">
        <Link to={"/"}>
        <img className="object-contain" src="data:image/jpeg;base64,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" className="rounded-2xl " alt="logo"  /></Link>
      </div>

      <div className=" hidden md:flex flex-wrap  items-center  m-3 lg:m-0 gap-3 lg:gap-20  font-medium text-white lg:text-md justify-around text-center">
        <Link to={"/"} className="link" >Home</Link>
        <Link to={"/products"} className="link" >Products</Link>
        <Link to={"/services"} className="link" >Services</Link>
        <Link to={"/about"}className="link" >About</Link>
        <Link to={"/contacts"}className="link" >Contacts</Link>
       
      </div>


      

      <div className="md:hidden flex justify-end items-center ">
       
       {!flage?(
       <button className=" link w-10 bg-orange-500 text-white rounded  rotate-180 font-medium" onClick={()=>setFlage(!flage)} >︽</button>
       ):
       (<div  onClick={()=>{setFlage(!flage)}}>
            <button className="w-10 bg-orange-500 text-white rounded  p-2" > ︽ </button>
             <div className="flex flex-row absolute mt-6  right-0 p-1 z-100  rounded-xl   bg-orange-500 text-white w-full justify-around items-center  ">
                 <Link className="link " to={"/"}>Home</Link>
                 <Link className="link" to={"/contacts"}>Contacts</Link>
                 <Link className="link" to={"/products"}>Product</Link>
                 <Link className="link" to={"/services"}>Services</Link>
                 <Link className="link" to={"/about"} >About</Link>
                 
                
             </div>
         </div>
       )}
        
      </div>


      <div > 
           <Link className="link bg-orange-500 rounded p-2 lg:px-3" to={"/login"}>Login</Link> 
      </div>

    </div>
 
   {/*  */}
    </div>
   </div>
   
  )
}

export default Navbar