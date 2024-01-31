

import Main from "../Components/Home-Page-Components/main"
import FeaturesProducts from "../Components/Home-Page-Components/FeaturesProducts"
import WhyChoose from "../Components/Home-Page-Components/WhyChoose"
import Mission from "../Components/Home-Page-Components/Mission"

import ServicesHome from "../Components/Home-Page-Components/ServicesHome"
import { useEffect } from "react"


const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
  useEffect(()=>{scrollToTop()},[])


  return (
    <div className="    ">
      
        
        {/* <div className=" mt-24 mb-5 mx-6 lg:mx-96   rounded-lg lg:my-4 bg-black relative  cursor-pointer">
            <div
                className="animate-pulse  absolute  -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 group-hover:opacity-70 transition duration-1000 group-hover:duration-200">
            </div>

            <div className="relative  py-3 bg-black   rounded-lg   ">

                    <h1 className="text-white text-sm  lg:text-md lg:font-semibold leading-normal 
                    tracking-wider
                    ">Welcome To VR Universal Computer</h1>
           </div>
    
         </div> */}
       {/* <div>
         <h1 className="text-white text-center bg-black  text-sm  lg:text-md lg:font-semibold leading-normal  tracking-wider w-96 p-2 m-auto rounded-2xl
         ">Welcome To VR Universal Computer</h1>
        </div> */}

        <Main/>
        <ServicesHome/>
        <FeaturesProducts/>
        <WhyChoose/>
        <Mission/>


        

        <div className="Advices"></div>
    </div>
  )
}

export default Home