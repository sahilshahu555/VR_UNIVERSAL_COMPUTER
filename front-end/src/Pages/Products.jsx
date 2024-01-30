
import { useEffect } from "react"
import Card from "../Components/Card"


const Products = () => {

//   const [data,setData]=useState([])

    const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
 

//   const getData=()=>{
//     axios.get("https://fakestoreapi.com/products")
//     .then((res)=>setData(res.data)).catch((err)=>console.log(err))
//   }

 useEffect(()=>{
  // getData()
  scrollToTop()
 },[])
//  console.log(data)

  const data=[
  {
    id:1,
    title:"Computer Processor",
    price:"₹ 1000",
    image:"https://content.instructables.com/FG6/NSYJ/IM5WPGD9/FG6NSYJIM5WPGD9.png?auto=webp&frame=1&width=320&md=1981a6e18e4a6c27d6bb905208d8f911"
  },
  {
    id:2,
    title:"Graphics Card",
    price:"₹ 250",
    image:"https://t3.ftcdn.net/jpg/05/67/19/38/360_F_567193870_KSXYJ2dkrEE4fCQTQsUyjH2m0MkiVdhg.jpg"
  },
  {
    id:3,
    title:"Mother Board",
    price:" ₹ 5000",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzvNznFhXln_Fow6wRBQUSYUydw2su8lkfQ&usqp=CAU"
  },
 
  {
    id:4,
    title:"RAM",
    price:"₹ 350",
    image:"https://c4.wallpaperflare.com/wallpaper/625/447/800/computer-motherboards-msi-pc-gaming-wallpaper-preview.jpg"
  },

   ]

  return (
    <div className="product  font-bold text-center bg-black p-2 mb-20
  
    ">
    <h1 className="text-3xl text-white mt-12 font-semibold m-5">Our <span className="text-orange-500">Products</span></h1>
    <h3 className="text-white m-5 font-medium tracking-wider ">To Buy Any following Product at <span className="text-orange-500">Best Price</span>, Please Call on the Mobile Number  <span className="text-white font-bold bg-orange-500 rounded-xl p-2 mx-2  leading-10"> 7776093738</span> </h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-1 lg:gap-2 mt-5 ">
      {data?.map((elm)=><Card key={elm.id} elm={elm}/>)}
     </div>
    </div>
  )
}

export default Products