import Card from "../Card"


const ServicesHome = () => {

  const data=[
  {
    id:1,
    title:"Software Services",
    price:"$ 1000",
    image:"https://e0.pxfuel.com/wallpapers/196/566/desktop-wallpaper-software-development-company-appstore-for-android.jpg"
  },
  {
    id:2,
    title:"Data Recovery ",
    price:"$ 1000",
    image:"https://www.shutterstock.com/image-photo/ftpfile-transfer-protocol-files-receiver-600nw-2180917239.jpg"
  },
  {
    id:3,
    title:"Laptop Repair",
    price:"$ 250",
    image:"https://png.pngtree.com/background/20231016/original/pngtree-professional-laptop-repair-services-3d-illustration-picture-image_5575306.jpg"
  },
  {
    id:4,
    title:"Desktop Repair",
    price:"$ 5000",
    image:"https://images.unsplash.com/photo-1588632901974-5ae3618d967b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D"
  },
 
  {
    id:5,
    title:"Printer Repair",
    price:"$ 350",
    image:"https://png.pngtree.com/background/20230522/original/pngtree-close-up-of-a-3d-printer-picture-image_2693234.jpg"
  },
  {
    id:6,
    title:"CCTV Camera",
    price:"$ 1000",
    image:"https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-nighttime-city-surveillance-3d-rendering-of-cctv-camera-monitoring-the-streets-image_3764508.jpg"
  },
  {
    id:7,
    title:"AC Repair",
    price:"$ 250",
    image:"https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-steam-cleansing-for-air-conditioning-unit-a-3d-render-image_3788474.jpg"
  },
  {
    id:8,
    title:"Fridge Repair",
    price:"$ 5000",
    image:"https://cdn-shared.altium.com/production/wds/images/wds-sticky-v2/tmp-img/AD24_Fullsize_Final_4K-2-2x-min.jpg"
  },
 
  {
    id:9,
    title:"Television Repair",
    price:"$ 350",
    image:"https://image.lexica.art/full_jpg/3bb847d1-f81b-426d-a85a-bbefe5a6e32d"
  },
  {
    id:10,
    title:"Cooler Repair",
    price:"$ 5000",
    image:"https://www.hindustantimes.com/ht-img/img/2023/03/06/400x225/Symphony_Diet_3D_1678106576029_1678106576196_1678106576196.jpg"
  },
  {
    id:11,
    title:"All Display Repair",
    price:"$ 5000",
    image:"https://cdn.uc.assets.prezly.com/2adc2913-824c-449d-8d08-47b97b208719/-/resize/1600/hero.jpg"
  },
  {
    id:12,
    title:"LED Lights Repair",
    price:"$ 5000",
    image:"https://images.adsttc.com/media/images/6406/0284/5ad9/9b01/7159/1de9/medium_jpg/worlds-first-3d-printed-film-studio-uses-futuristic-led-lighting-technologies_41.jpg?1678115498"
  },
 
]
  return (
    <div id="Home-services" className=" p-10 md:p-0 -mt-10 md:mt-0 bg-black text-white flex flex-col   items-center 
    text-center   px-5 md:px-10 md:gap-5
    ">
              <h1 className="text-3xl font-semibold m-5">Our <span className="text-orange-500">Services</span></h1>

            

                <div className="flex flex-wrap justify-around items-center  gap-7 lg:my-14 lg:gap-12 my-10 lg:mt-0">
                 {data?.map((elm)=>(
                 <div key={elm.id} className="w-40  md:w-56 my-2 shadow-md shadow-orange-500 rounded-xl 
                 flex flex-col justify-between items-center hover:bg-orange-400 
            
                 ">
                    <img src={elm.image} className="rounded-t-xl w-full h-28 md:h-36 " alt="" />
                    <h1 className="text-white my-2 ">{elm.title}</h1>
                 </div>))}
                </div>
        </div>
  )
}

export default ServicesHome;
