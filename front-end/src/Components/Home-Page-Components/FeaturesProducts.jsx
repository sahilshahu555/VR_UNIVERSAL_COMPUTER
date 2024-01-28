import Card from "../Card"


const FeaturesProducts = () => {

  const data=[
  {
    id:1,
    title:"Computer Processor",
    price:"$ 1000",
    image:"https://content.instructables.com/FG6/NSYJ/IM5WPGD9/FG6NSYJIM5WPGD9.png?auto=webp&frame=1&width=320&md=1981a6e18e4a6c27d6bb905208d8f911"
  },
  {
    id:2,
    title:"Graphics Card",
    price:"$ 250",
    image:"https://t3.ftcdn.net/jpg/05/67/19/38/360_F_567193870_KSXYJ2dkrEE4fCQTQsUyjH2m0MkiVdhg.jpg"
  },
  {
    id:3,
    title:"Mother Board",
    price:"$ 5000",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzvNznFhXln_Fow6wRBQUSYUydw2su8lkfQ&usqp=CAU"
  },
 
  {
    id:4,
    title:"RAM",
    price:"$ 350",
    image:"https://c4.wallpaperflare.com/wallpaper/625/447/800/computer-motherboards-msi-pc-gaming-wallpaper-preview.jpg"
  },

]
  return (
    <div className="Featured-Products p-10 md:p-0 -mt-10 md:mt-0 bg-black text-white flex flex-col   items-center 
    text-center   px-5 md:px-10 md:gap-5
    ">
              <h1 className="text-3xl font-semibold m-5">Featured <span className="text-orange-500">Products</span></h1>

              <p className="">We are providing best-selling items for your product, product range, or company. </p>

                <div className="flex flex-wrap justify-around items-center  gap-4 lg:m-10 lg:gap-12 mt-10 lg:mt-0">
                 {data?.map((elm)=>(<Card elm={elm} key={elm.id}/>))}
                </div>
        </div>
  )
}

export default FeaturesProducts
