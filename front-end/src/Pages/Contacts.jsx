import { useEffect } from "react";


const Contacts = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0,   });
  }
  useEffect(()=>{scrollToTop()},[])
  return (
    <div className=" font-bold text-center bg-black p-2 mb-20
    
    ">
    <h1 className="text-3xl text-white mt-12 font-semibold m-5">Our <span className="text-orange-500">Contacts</span></h1>

    <div className="About-1  bg-black text-white flex flex-col   md:flex-row items-center gap-10 md:gap:2 text-start  md:justify-around  ">

<div className=" rounded-3xl md:p-5 w-full  ">
  <img
    className="rounded-3xl  w-full "
    src="https://img.pikbest.com/wp/202348/contact-us-office-3d-rendering-showcasing-the-concept_9781285.jpg!w700wp"
    alt="photo"
  />
</div>

<div className="  lg:mt-0 w-full p-5 flex flex-col justify-between">
  <h1 className="  text-xl md:text-2xl text-center font-bold md:text-bold  mb-4"
  >
   Our <span className="text-orange-500 ">Contacts</span>
  </h1>
  <h5 className="text-md  my-3 md:my-2 tracking-wide text-center">
  We are Dedicated to Providing <span className="text-orange-500 "> Cost-effective </span> repairs 
  </h5>
 
  <p className="text-xs font-thin tracking-wider mt-1">
  * Mobile Number :- 7776093738 / 7248903512
  </p>
  
  <p className="text-xs font-thin tracking-wider mt-1">
  * WhatsApp :- 7776093738 / 7248903512
  </p>
  
  <p className="text-xs font-thin tracking-wider mt-1">
  * Email Id :- vruniversalcomputer@gmail.com
  </p>
  
</div>
</div>

    </div>
  )
}

export default Contacts