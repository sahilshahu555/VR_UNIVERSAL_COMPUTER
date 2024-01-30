


const WhyChoose = () => {
  const data=[
    {
      id:1,
      icon:"fa-solid fa-star w-32 text-orange-500",
      title:"Best Quality",
      desc:"Rigorous quality control processes are integrated into every stage of our work. This commitment to quality ensures that our clients receive products and services that meet the highest standards."
    },
    {
      id:2,
      icon:"fa-solid fa-people-group w-32 text-orange-500",
      title:"Satisfied Customers",
      desc:"Your success is our priority. We work closely with our clients to understand their unique needs, providing tailored solutions that address specific challenges and foster growth."
    }, {
      id:3,
      icon:"fa-solid fa-screwdriver-wrench w-32 text-orange-500",
      title:"Skilled Team",
      desc:"Our team of experts comprises seasoned professionals with a deep understanding of the industry. They bring a wealth of experience and expertise to every task or project."
    }, 
  ]
  return (
    <div className="Featured-Products  md:p-0  bg-black text-white flex flex-col   items-center justify-around
    text-center   px-10 lg:px-10 lg:gap-4 mb-10 lg:mb-5
    ">
              <h1 className="text-2xl font-semibold">Why Choose <span className="text-orange-500">VR Universal Computers</span> ?</h1>

              <p className="  text-left p-5 lg:p-10 tracking-wide"> At VR Universal Computer, we specialize in delivering reliable and efficient computer repair services. With a team of skilled technicians, we are committed to diagnosing and resolving a wide range of computer issues promptly. </p>

                <div className="flex flex-wrap justify-around items-center  gap-12 lg:m-10  mt-10 lg:mt-0">
                  
                  
                  {data?.map((elm)=>(
                    <div key={elm.id} className="w-72 ring-1 ring-orange-500 shadow-lg shadow-orange-300 p-5 flex flex-col justify-around  items-center h-60 rounded-xl hover:bg-gray-600   ">
                      
                      <i className={elm.icon}></i>
                      <h1 className="text-orange-500 text-xl m-2">{elm.title}</h1>
                      <p className="text-sm text-center tracking-wide p-2">{elm.desc}</p>
                      
                    </div>
                  ))}
                 
                 
                </div>
        </div>
  )
}

export default WhyChoose
