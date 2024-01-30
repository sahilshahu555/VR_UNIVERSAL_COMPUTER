import { useState } from "react"
import { Link } from "react-router-dom"


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
      <div className=" w-28 lg:w-24 ">
        <Link to={"/"}>
        <img className="object-contain rounded-2xl" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL-W0bvziFy96YEUK6jrvAuZKcQLU4B5MYT0W8zI0S1DnTtevT"  alt="logo"  /></Link>
      </div>

      <div className=" hidden md:flex flex-wrap  items-center  m-3 lg:m-0 gap-3 lg:gap-20  font-medium text-white lg:text-md justify-around text-center">
        <Link to={"/"} className="link" >Home</Link>
        <Link to={"/services"} className="link" >Services</Link>
        <Link to={"/products"} className="link" >Products</Link>
        <Link to={"/about"}className="link" >About</Link>
        <Link to={"/contacts"}className="link" >Contacts</Link>
       
      </div>


      

      <div className="md:hidden flex justify-end items-center ">
       
       {!flage?(
       <button className=" link w-16 bg-orange-500 text-white rounded  font-medium" onClick={()=>setFlage(!flage)} > Menu </button>
       ):
       (<div  onClick={()=>{setFlage(!flage)}}>
            <button className="w-16 bg-orange-500 text-white rounded  p-2" > ︽ </button>
             <div className="flex flex-row absolute mt-6  right-0 p-1   rounded-xl   bg-orange-500 text-white w-full justify-around items-center  ">
                 <Link className="link" to={"/"}>Home</Link>
                 <Link className="link" to={"/services"}>Services</Link>
                 <Link className="link" to={"/products"}>Product</Link>
                 <Link className="link" to={"/about"} >About</Link>
                 <Link className="link" to={"/contacts"}>Contacts</Link>
                 
             </div>
         </div>
       )}
        
      </div>


      <div className="hidden md:flex"> 
           <Link className="link bg-orange-500 rounded p-2 lg:px-3" to={"/"}>Login</Link> 
      </div>

    </div>
 
   {/*  */}
    </div>
   </div>
   
  )
}

export default Navbar