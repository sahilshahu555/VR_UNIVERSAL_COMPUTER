import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"


const Products = () => {

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
    <div className="  font-bold text-center bg-black p-2 mb-20
  
    ">
    <h1 className="text-2xl mt-10 text-orange-500  lg:tracking-wider"> Products Page</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1 lg:gap-2 lg:m-5 ">
      {data?.map((elm)=><Card key={elm.id} elm={elm}/>)}
     </div>
    </div>
  )
}

export default Products