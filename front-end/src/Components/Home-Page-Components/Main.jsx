

const Main = () => {
  return (
    <div className="Main-Content  p-14 md:p-0  bg-black text-white flex flex-col-reverse  md:flex-row items-center
    text-start  md:justify-around px-5 md:px-10 md:gap-5 ">
      <div className=" mt-20 lg:m-20 ">
      <h1 className="  text-2xl md:text-4xl font-bold md:text-bold  mb-4
     ">Welcome To <span className="text-orange-500">VR Universal Computer</span></h1>
     <h5 className="text-md  my-3 md:my-2">Provides Best Quality of products and services</h5>
     <p className="text-xs font-thin tracking-wider">We specialize in delivering reliable and efficient computer repair services. With a team of skilled technicians, we are committed to diagnosing and resolving a wide range of computer issues promptly. </p>
     <div className="flex gap-16 justify-center md:justify-start md:gap-10 items-center mt-5">
        <button className="bg-orange-500 link p-2 rounded">Explore More</button>
        <button className="ring-1 ring-orange-500  link p-2 rounded" >See Products</button>

     </div>
      </div>
      <div className="lg:p-10 ">
        <img className="rounded-3xl" src="https://png.pngtree.com/thumb_back/fw800/background/20230716/pngtree-dark-wallpaper-3d-rendering-featuring-high-tech-sensor-circuit-board-panel-image_3882235.jpg" alt="" />
      </div>
    </div>
  )
}

export default Main
