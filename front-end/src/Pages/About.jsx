import { useEffect } from "react";


const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
  useEffect(()=>{scrollToTop()},[])
  return (
    <div className=" font-bold text-center text-white bg-black p-10 mb-20">

<h1 className="text-3xl font-semibold m-5">About <span className="text-orange-500">US</span></h1>

        <div className="About-1  bg-black text-white flex flex-col   md:flex-row items-center gap-10 md:gap:2 text-start  md:justify-around  ">

        <div className=" rounded-3xl md:p-10 w-full  ">
          <img
            className="rounded-3xl  w-full "
            src="https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-exploring-the-metaverse-a-digital-network-s-vision-of-work-in-image_13558244.png"
            alt="photo"
          />
        </div>

        <div className="  lg:mt-0 w-full ">
          <h1 className="  text-xl md:text-2xl text-center font-bold md:text-bold  mb-4"
          >
           Our <span className="text-orange-500 ">Vison</span>
          </h1>
          <h5 className="text-thin font-medium my-3 md:my-2 tracking-wider leading-normal">Ultimately,
          <span className="text-orange-500 ">  VR Universal Computer's  </span> vision is to be a beacon of trust and reliability in the realm of computer repair, embracing technological advancements to provide unparalleled service and leaving a positive impact on our customers, employees, and the environment.
          </h5>
          
         
        </div>
      </div>

      <div className="About-2  mt-10 bg-black text-white flex flex-col-reverse   md:flex-row items-center gap-10 md:gap:2 text-start  md:justify-around  ">



      <div className="  lg:mt-0 w-full lg:px-10">
        <h1 className="  text-xl md:text-2xl text-center font-bold md:text-bold  mb-4"
        >
        Our <span className="text-orange-500 ">Approch</span>
        </h1>
        <h5 className="text-md text-medium my-3 md:my-2 ">
        We are dedicated to providing swift, reliable, and cost-effective repairs, 
        </h5>
        <p className="text-thin leading-normal font-medium tracking-wider">
        <span className="text-orange-500 "> VR Universal Computer </span> adopts a customer-centric approach, combining advanced virtual reality technology with a skilled workforce to deliver efficient, innovative, and sustainable computer repair solutions. Our focus is on continuous learning, environmental responsibility, and exceeding customer expectations in the rapidly evolving tech landscape.
        </p>
      
      </div>

      <div className=" rounded-3xl md:p-10 w-full  ">
        <img
          className="rounded-3xl  w-full "
          src="https://png.pngtree.com/background/20231017/original/pngtree-cybernetic-futuristic-art-abstract-technology-background-in-3d-picture-image_5590850.jpg"
          alt="photo"
        />
      </div>
      </div>

    </div>
  )
}

export default About