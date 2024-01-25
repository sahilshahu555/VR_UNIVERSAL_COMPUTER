import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex   justify-around items-center bg-black text-slate-300">
      <div className=" w-36 mx-5 lg:w-14 lg:m-1 ">
        <Link to={"/"}>
        <img src="https://vr-universal.com/wp-content/uploads/sb-instagram-feed-images/vruniversalmalaysia.jpg" className="rounded-2xl " alt="logo"  /></Link>
      </div>
      <div className=" flex flex-wrap  items-center  m-6 lg:m-0 gap-3 lg:gap-20      font-bold lg:text-md justify-between lg:justify-around text-center">
        <Link to={"/"} >Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contacts"}>Contacts</Link>
        <Link to={"/login"} >Profile</Link>
      </div>
    </div>
  )
}

export default Navbar