import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import Card from '../components/VechileCard'   //Props

const Vehiclelist = () => {

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)


    useEffect(()=>{
        const receiveData = async () =>{
            const res = await axios.get('http://localhost:8000/base/vehicle')
            try{
                if (res){
                    setRecords(res.data.data)
                    setData(res.data)
                }
            }
            catch (error){
                console.log('error occured', error)
            }
        }
        receiveData();
        
    },   [flag])



    const deleteRecord = async (id) => {
        try{
          const res = await axios.delete(`http://localhost:8000/base/vehicle?id=${id}`)
    
          if (res){
            console.log('deleted successfully')
            setFlag(!flag)
          }
        }
        catch (error){
          console.log(error)
        }
      }



  return (
    <div class='container' >
        <h2 class='mt-4'>Vehicles are Available</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/vehicle'>Add Vehicle</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.model}</p>
                        <p class="card-text">{item.make}</p>
                        <button class='btn btn-danger'onClick={()=> deleteRecord(item.id)}>Delete</button>
                    </div>
                </div>
    )) : 
    <p>Loading....</p>
    }
        </div>
    </div>
  )
}

export default Vehiclelist