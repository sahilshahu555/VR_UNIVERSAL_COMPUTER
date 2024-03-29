import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className=" app text-center font-serif  ">
      <div className="relative ">
        <div className=" fixed top-0 left-0 right-0 ">
          <Navbar />
        </div>
      </div>
      <div className="bg-black h-16 "></div>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
