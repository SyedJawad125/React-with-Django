import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import Card from '../components/MakeCard'
// import { findAllByTestId } from '@testing-library/react'

const Makelist = () => {

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)


    useEffect(()=>{

        const receiveData = async () =>{
            const res = await axios.get('http://localhost:8000/base/make')
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
                const res = await axios.delete(`http://localhost:8000/base/make?id=${id}`)
                if(res){
                    console.log('Delete Successfully')
                    setFlag(!flag)
                }
            }
            catch(error){
                console.log(error)
            }
         }


  return (
    <div class='container' >
        <h2 class='mt-4'>List Of Companies We deals Here!</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/Addmake'>Add Maker</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
                <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
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

export default Makelist