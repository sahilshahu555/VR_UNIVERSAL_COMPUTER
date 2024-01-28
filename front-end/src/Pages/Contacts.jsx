

const Contacts = () => {
  return (
    <div className=" font-bold text-center bg-black p-10 mb-20
    
    ">
    <h1 className="text-2xl m-6 text-orange-500  lg:tracking-wider"> Contacts Page</h1>

    <div className="About-1  bg-black text-white flex flex-col   md:flex-row items-center gap-10 md:gap:2 text-start  md:justify-around  ">

<div className=" rounded-3xl md:p-10 w-full  ">
  <img
    className="rounded-3xl  w-full "
    src="https://img.pikbest.com/wp/202348/contact-us-office-3d-rendering-showcasing-the-concept_9781285.jpg!w700wp"
    alt="photo"
  />
</div>

<div className="  lg:mt-0 w-full">
  <h1 className="  text-xl md:text-2xl text-center font-bold md:text-bold  mb-4"
  >
   Our <span className="text-orange-500 ">Contacts</span>
  </h1>
  <h5 className="text-md  my-3 md:my-2 ">
  We are dedicated to providing swift, reliable, and cost-effective repairs, 
  </h5>
  <p className="text-xs font-thin tracking-wider">
  0ur mission is to deliver unparalleled excellence in computer repair services through innovative virtual reality solutions.
  </p>
 
</div>
</div>

    </div>
  )
}

export default Contacts