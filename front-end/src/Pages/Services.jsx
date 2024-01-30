import { useEffect } from "react";
import ServicesHome from "../Components/Home-Page-Components/ServicesHome";


const Services = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
  useEffect(()=>{scrollToTop()},[])
  
  return (
    <div className=" font-bold text-center bg-black p-3 ">
    <h1 className="text-2xl mt-12 text-orange-500 lg:tracking-wider"> Services Page</h1>

    <h3 className="text-white m-5 font-medium tracking-wider ">To Get Any following Services at<span className="text-orange-500"> Best Cost</span>, Please Call on the Mobile Number  <span className="text-white font-bold bg-orange-500 rounded-xl p-1.5 m-2 leading-10"> 7776093738</span> </h3>

    <ServicesHome/>
    </div>
  )
}

export default Services