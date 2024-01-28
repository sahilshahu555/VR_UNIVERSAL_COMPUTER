

const Card = ({elm}) => {
    const {title,price,image,id}=elm
  return (
   
    <div className=" leading-relaxed  text-start rounded-xl  my-5 text-black      
    bg-black flex flex-col justify-between shadow-md shadow-orange-300   w-40 lg:w-52 items-center m-auto 
    ">
        <img className="h-40 lg:h-48 w-full rounded-t-xl " src={image} alt={id}  />
        <h1 className="p-2 text-semibold text-white"> {title}</h1>
        <p className=" link py-1 px-2   mb-4 bg-orange-500 text-white rounded-xl"> Price : {price}</p>
    
    </div>
    

  )
}

export default Card