

const Card = ({elm}) => {
    const {title,price,image,id}=elm
  return (
   
    <div className=" leading-relaxed  text-start rounded-xl  my-5 text-black text-xs font-light   shadow-lg shadow-yellow-400
    bg-slate-300 flex flex-col justify-between  w-40 lg:w-52 items-center m-auto
    ">
        <img className="h-48 w-full rounded-xl" src={image} alt={id}  />
        <h1 className="p-2"> Name : {title}</h1>
        <h3 className=" link p-2 mb-4 bg-yellow-300 rounded-xl"> Price : {price}</h3>
    
    </div>
    

  )
}

export default Card