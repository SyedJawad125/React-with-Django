import Contact from './pages/Contact'
import About from './pages/AboutUs'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Addvehicle from './pages/Addvehicle'
import Vechilelist from './pages/Vehiclelist'
import Makelist from './pages/Makelist'
import Addmake from './pages/Addmake'
import Best from './pages/Best'
import Forms from './pages/Forms'

const App = ()=>{
  return(
    <div>
      <Navbar/>
       
       <Home />

       <About />

       <Forms />

       <Best />

       <Makelist />

       <Vechilelist />

       <Contact />



      <Routes>
        <Route path='/add/Addmake' element={<Addmake/>}  />
        <Route path='/add/vehicle' element={<Addvehicle/>}  />
      </Routes>

    </div>
  )
}


export default App