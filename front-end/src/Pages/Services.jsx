import { useEffect } from "react";

import { Link } from "react-router-dom";


const Services = () => {

  const data=[
    {
      id:1,
      title:"Software Services",
      price:"$ 1000",
      image:"https://e0.pxfuel.com/wallpapers/196/566/desktop-wallpaper-software-development-company-appstore-for-android.jpg",
      services:[
        "OS Installation","Games Installation","Drivers Installation",
        "Antivirus Installation",
         "Editing Tools Installation", 
      ]
    },
    {
      id:2,
      title:"Data Recovery ",
      price:"$ 1000",
      image:"https://www.shutterstock.com/image-photo/ftpfile-transfer-protocol-files-receiver-600nw-2180917239.jpg",
      services:[
        "Data Formating","Tablet data Recovery","Laptop data Recovery",
        "Mobile Data Recovery","Desktop data Recovery",
        
        
        
      ]
    },
    {
      id:3,
      title:"Laptop Repair",
      price:"$ 250",
      image:"https://png.pngtree.com/background/20231016/original/pngtree-professional-laptop-repair-services-3d-illustration-picture-image_5575306.jpg",
      services:[
        "Mother Board Repairing", "OS Installation","Adaptor Repairing",
        "Display Repairing", "Battery Repairing", "Keyboard Repairing"
      ]
    },
    {
      id:4,
      title:"Desktop Repair",
      price:"$ 5000",
      image:"https://images.unsplash.com/photo-1588632901974-5ae3618d967b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D",
      services:[
        "CPU Repairing", "SMPS Repairing","Adaptor Repairing",
        "Monitor Repairing", "Cabinate Repairing", "Keyboard Repairing"
      ]
    },
   
    {
      id:5,
      title:"Printer Repair",
      price:"$ 350",
      image:"https://png.pngtree.com/background/20230522/original/pngtree-close-up-of-a-3d-printer-picture-image_2693234.jpg",
      services:[
        "Buy New Printer", "Old Printer Repairing","New Printer Cartridge",
        "Printer Cartridge Refilling", "Printer Cleaning", "Network Configurations"
      ]
    },
    {
      id:6,
      title:"CC TV Camera",
      price:"$ 1000",
      image:"https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-nighttime-city-surveillance-3d-rendering-of-cctv-camera-monitoring-the-streets-image_3764508.jpg",
      services:[
        "Buy New CCTV Camera", "CCTV Camera Installation","Cables Repairing",
        "CCTV Camera Servicing", "Server Configurations"
      ]
    },
    {
      id:7,
      title:"AC Repair",
      price:"$ 250",
      image:"https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-steam-cleansing-for-air-conditioning-unit-a-3d-render-image_3788474.jpg",
      services:[
        "Buy New AC", "AC Servicing", "AC Repairing", "Cables Repairing"
      ]
    },
    {
      id:8,
      title:"Fridge Repair",
      price:"$ 5000",
      image:"https://cdn-shared.altium.com/production/wds/images/wds-sticky-v2/tmp-img/AD24_Fullsize_Final_4K-2-2x-min.jpg",
      services:[
        "Buy New Fridge", "Fridge Servicing", "Fridge Repairing", "Cables Repairing"
      ]
    },
   
    {
      id:9,
      title:"Television Repair",
      price:"$ 350",
      image:"https://image.lexica.art/full_jpg/3bb847d1-f81b-426d-a85a-bbefe5a6e32d",
      services:[
        "Buy New Television", "Television Repairing", 
        "Display Repairing", "TV Remote Repairing", "Television Servicing", 
      ]
    },
    {
      id:10,
      title:"Cooler Repair",
      price:"$ 5000",
      image:"https://www.hindustantimes.com/ht-img/img/2023/03/06/400x225/Symphony_Diet_3D_1678106576029_1678106576196_1678106576196.jpg",
      services:[
        "Buy New Cooler", "Cooler Repairing",  "Cooler Servicing",
        "Motor Repairing", "Water Pump Repairing",
      ]
    },
    {
      id:11,
      title:"All Display Repair",
      price:"$ 5000",
      image:"https://cdn.uc.assets.prezly.com/2adc2913-824c-449d-8d08-47b97b208719/-/resize/1600/hero.jpg",
      services:[
        
        "Laptop Display Repairing","PC Display Repairing","Tablet Display Repairing", "Mobile Display Repairing","TV Display Repairing",
      ]
    },
    {
      id:12,
      title:"LED Lights Repair",
      price:"$ 5000",
      image:"https://images.adsttc.com/media/images/6406/0284/5ad9/9b01/7159/1de9/medium_jpg/worlds-first-3d-printed-film-studio-uses-futuristic-led-lighting-technologies_41.jpg?1678115498",
      services:[
        "Buy New LED Light", "Repair LED Components", "Replace LED Components",
        "LED Light Servicing", 
      ]
    },
   
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0,  });
  }
  useEffect(()=>{scrollToTop()},[])
  
  return (
    <div className=" font-bold text-center bg-black p-3 mb-20 md:mb-10 ">
    {/* <h1 className="text-2xl mt-12 text-orange-500 lg:tracking-wider"> Services Page</h1> */}

    {/* <h3 className="text-white  mt-12 m-5 font-medium tracking-wider ">To Get Any following Services at<span className="text-orange-500"> Best Cost</span>, Please Call on the Mobile Number  <span className="text-white font-bold bg-orange-500 rounded-xl p-1.5 m-2 leading-10"> 7776093738</span> </h3> */}





    <div id="Home-services" className="  p-2  md:mt-0 bg-black  flex flex-col   items-center 
    text-center     md:gap-5
    ">
              <h1 className="text-3xl text-white mt-12 font-semibold ">Our <span className="text-orange-500">Services</span></h1>

              <h3 className="text-white   m-3 font-medium tracking-wider ">To Get Any following Services at<span className="text-orange-500"> Best Cost</span>, Please Call on the Mobile Number  <span className="text-white font-bold bg-orange-500 rounded-xl p-1.5 m-2 leading-10"> 7776093738</span> </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:mb-5 md:mx-14 ">
                 {data?.map((elm)=>(
                 <div key={elm.id} className="  m-5  shadow-lg shadow-orange-500 rounded-xl text-white
                 flex flex-col lg:flex-row justify-between items-start   hover:text-black hover:bg-gray-300
            
                 ">
                    <img src={elm.image} className="rounded-xl w-full lg:w-1/2 h-48 " alt="" />

                    <div className="p-2 w-full lg:w-1/2  rounded-xl  ">
                      <p className="text-orange-500 text-xl text-center mb-4">{elm.title}</p>
                      {elm.services?.map((elm,i)=>(
                        <ul key={i} className="text-start ml-10 list-disc list-outside ... mb-2 md:mb-0">
                            <li className="text-sm md:font-light  "> {elm}</li>
                            
                      </ul>
                      ))}
                      

                    </div>
                    
                 </div>))}
                </div>
               
        </div>
    </div>
  )
}

export default Services