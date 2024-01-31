

const Card = ({elm}) => {
    const {title,price,image,id}=elm
  return (
   
    <div className=" leading-relaxed  text-start rounded-xl  my-5 text-black      
    bg-black flex flex-col justify-between shadow-md shadow-orange-300   w-36 lg:w-52 items-center m-auto 
    ">
        <img className="h-36 lg:h-48 w-full rounded-t-xl " src={image} alt={id}  />
        <h1 className="p-2 font-thin text-xs md:text-sm  text-white"> {title}</h1>
        {/* <p className=" link md:py-1 px-3 font-thin text-xs md:text-sm   mb-4 bg-orange-500 text-white rounded-xl">  {price}</p> */}
    
    </div>
    

  )
}

export default Card