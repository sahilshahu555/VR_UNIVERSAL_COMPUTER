import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [flage,setFlage]=useState(false)
  return (
    <div className="lg:p-0.5 m-3 z-10 bg-black relative group cursor-pointer">
    <div
        className="animate-pulse absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-2000">
    </div>
    <div className=" relative m-0.5 bg-black lg:ring-1 ring-gray-100   rounded-lg leading-none  ">
   {/*  */}

    <div className="flex p-0.5 rounded-xl lg:rounded-lg justify-around items-center bg-yellow-300 text-white ">
      <div className=" w-16 p-2 lg:p-0  lg:w-9 lg:m-1 ">
        <Link to={"/"}>
        <img src="https://vr-universal.com/wp-content/uploads/sb-instagram-feed-images/vruniversalmalaysia.jpg" className="rounded-2xl " alt="logo"  /></Link>
      </div>

      <div className=" hidden md:flex flex-wrap  items-center  m-3 lg:m-0 gap-3 lg:gap-20  font-semibold text-slate-600 lg:text-md justify-around text-center">
        <Link to={"/"} className="link" >Home</Link>
        <Link to={"/products"} className="link" >Products</Link>
        <Link to={"/services"} className="link" >Services</Link>
        <Link to={"/about"}className="link" >About</Link>
        <Link to={"/contacts"}className="link" >Contacts</Link>
       
      </div>


      

      <div className="md:hidden flex justify-end items-center ">
       
       {!flage?(
       <button className=" link w-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded px-3  font-medium" onClick={()=>setFlage(!flage)} >Menu</button>
       ):
       (<div  onClick={()=>{setFlage(!flage)}}>
            <button className="w-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded px-3 p-2" > ︽ </button>
             <div className="flex flex-row absolute mt-5 right-0 p-2  rounded-xl   bg-slate-300 text-black w-full justify-around items-center font-medium   flex-wrap ">
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
           <Link className="link bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded p-2 lg:p-1" to={"/login"}>Login</Link> 
      </div>

    </div>
 
   {/*  */}
    </div>
   </div>
   
  )
}

export default Navbar