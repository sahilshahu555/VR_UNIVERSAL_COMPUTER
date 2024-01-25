
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'

function App() {


  return (
    <div className='text-center font-serif  '>
       <Navbar/>

       <AllRoutes/>
       <Footer/>
    </div>
  )
}

export default App
