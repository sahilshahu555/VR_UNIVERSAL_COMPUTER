import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="lg:p-0.5 m-5 bg-black relative group cursor-pointer">
    <div
        className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 group-hover:opacity-70 transition duration-1000 group-hover:duration-200">
    </div>

    <div className="relative m-0.5 bg-black lg:ring-1 ring-gray-100   rounded-lg leading-none  ">
    
   
    <div className="flex p-0.5 rounded-3xl lg:rounded-lg justify-around items-center bg-black text-white ">
      <div className=" w-36 mx-5 lg:w-10 lg:m-1 ">
        <Link to={"/"}>
        <img src="https://vr-universal.com/wp-content/uploads/sb-instagram-feed-images/vruniversalmalaysia.jpg" className="rounded-2xl " alt="logo"  /></Link>
      </div>
      <div className=" flex flex-wrap  items-center  m-3 lg:m-0 gap-3 lg:gap-20      font-bold lg:text-md justify-around text-center">
        <Link to={"/"} className="hover:text-red-300" >Home</Link>
        <Link to={"/products"} className="hover:text-red-300" >Products</Link>
        <Link to={"/services"} className="hover:text-red-300" >Services</Link>
        <Link to={"/about"}className="hover:text-red-300" >About</Link>
        <Link to={"/contacts"}className="hover:text-red-300" >Contacts</Link>
        <Link to={"/login"} className="hover:text-red-300" >Profile</Link>
      </div>
    </div>

    </div>

     
   </div>
   
  )
}

export default Navbar