import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"


const Products = () => {

  const [data,setData]=useState([])

    const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
 

  const getData=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setData(res.data)).catch((err)=>console.log(err))
  }

 useEffect(()=>{
  getData()
  scrollToTop()
 },[])
 console.log(data)

  return (
    <div className="product  font-bold text-center bg-black p-2 mb-20
  
    ">
    <h1 className="text-2xl mt-12 text-orange-500  lg:rackitng-wider"> Products Page</h1>
    <h3 className="text-white m-5 font-medium tracking-wider ">To Buy Any following Product at <span className="text-orange-500">Best Price</span>, Please Call on the Mobile Number  <span className="text-white font-bold bg-orange-500 rounded-xl p-2 mx-2  leading-10"> 7776093738</span> </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1 lg:gap-2 lg:m-5 ">
      {data?.map((elm)=><Card key={elm.id} elm={elm}/>)}
     </div>
    </div>
  )
}

export default Products