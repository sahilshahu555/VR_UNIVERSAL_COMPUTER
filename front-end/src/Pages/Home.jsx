import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"


const Home = () => {

  const [data,setData]=useState([])

  const getData=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setData(res.data)).catch((err)=>console.log(err))
  }

 useEffect(()=>{
  getData()
 },[])
 console.log(data)


  return (
    <div className=" font-bold text-center bg-black p-2 ">
        
        <div className=" mt-12 mb-5 mx-6 lg:mx-96 lg:my-4 bg-black relative group cursor-pointer">
            <div
                className="animate-pulse  absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 group-hover:opacity-70 transition duration-1000 group-hover:duration-200">
            </div>

            <div className="relative  py-3 bg-black ring-1 ring-gray-100   rounded-lg leading-none  ">

                    <h1 className="text-white text-sm lg:text-md lg:font-semibold leading-normal 
                    tracking-wider
                    ">Welcome To VR Universal Computer</h1>
           </div>
    
         </div>
       
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1 lg:gap-2 lg:m-5 ">
      {data?.map((elm)=><Card key={elm.id} elm={elm}/>)}
     </div>
        
    </div>
  )
}

export default Home