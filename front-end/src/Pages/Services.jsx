import { useEffect } from "react";


const Services = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
  useEffect(()=>{scrollToTop()},[])
  
  return (
    <div className=" font-bold text-center bg-black p-2 
    h-96 lg:h-72
    ">
    <h1 className="text-2xl mt-12 text-orange-500 lg:tracking-wider"> Services Page</h1>
    </div>
  )
}

export default Services