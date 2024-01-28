const Mission = () => {
  return (
    <div className="px-10 mb-24">
      <div>
        <h1 className="text-white text-bold text-3xl md:text-3xl mb-10">
          Our <span className="text-orange-500">Mission</span>
        </h1>
      </div>
      <div
        className="Main-Content   bg-black text-white flex flex-col   md:flex-row items-center gap-10 md:gap:2
         text-start  md:justify-around  "
      >
        <div className=" rounded-3xl md:p-10 w-full  ">
          <img
            className="rounded-3xl  w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV-BZ4eYgNik92H0g91RrFjmzqISxPak-SQ&usqp=CAU"
            alt="photo"
          />
        </div>

        <div className="  lg:mt-0 ">
          <h1
            className="  text-xl md:text-2xl text-start font-bold md:text-bold  mb-4
     "
          >
           Our mision to be the forefront leader in <span className="text-orange-500 ">The ever-evolving landscape of Computer repair services</span>
          </h1>
          <h5 className="text-md  my-3 md:my-2 ">
          We are dedicated to providing swift, reliable, and cost-effective repairs, 
          </h5>
          <p className="text-xs font-thin tracking-wider">
          0ur mission is to deliver unparalleled excellence in computer repair services through innovative virtual reality solutions.
          </p>
          <div className="flex gap-16 justify-center md:justify-start md:gap-10 items-center mt-5">
            <button className="bg-orange-500 p-2 rounded link">Explore More</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
