import Contact from './pages/Contact'
import About from './pages/AboutUs'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Make from './pages/Make'
import {Routes, Route} from 'react-router-dom'
import Addvehicle from './pages/Addvehicle'
import Vechilelist from './pages/Vehiclelist'

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/make' element={<Make/>}  />
        <Route path='/add/vehicle' element={<Addvehicle/>}  />
        <Route path='/Vehiclelist' element={<Vechilelist/>}  />

      </Routes>

    </div>
  )
}


export default App