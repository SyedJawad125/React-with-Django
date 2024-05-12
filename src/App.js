import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import { Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Home from './pages/Home';
import About from './pages/About';
import Make from './pages/Make';
import AddVehicle from './pages/Vehicle';
import {Routes, Route} from 'react-router-dom'
import VechileList from './pages/VechileList';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/forms' element={<Forms/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/make' element={<Make/>}  />
        <Route path='/add/vehicle' element={<AddVehicle/>}  />

        <Route path='/vehicle' element={<VechileList/>}  />



      </Routes>
    </div>  

  );
}

export default App;
