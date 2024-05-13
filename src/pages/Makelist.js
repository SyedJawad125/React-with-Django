import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from '../components/MakeCard'

const Makelist = () => {

    const [records, setRecords] = useState([])
    const [data, setData] = useState([])


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
    },   [])



  return (
    <div class='container' id='make1' style={{ marginTop: '6rem' }}>
        <h2 class='mt-4'>List Of Companies We deals Here!</h2>

        <Link type="submit" class="btn btn-primary mt-3" to='/add/Addmake'>Add Maker</Link>
        
        <br/><br/>

        {data ? <p>Total: {data.count}</p> : <p>Total: 0</p>}

        <div class="row">
            
            { records ? 
            records.map(item => (
               <Card item={item}/>

    )) : 
    <p>Loading....</p>
    }
        </div>
        
        
    
    </div>
  )
}

export default Makelist