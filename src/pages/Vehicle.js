import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Vehicle = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [purchase, setPurchase] = useState('')
  const [price, setPrice] = useState('')
  const [make, setMake] = useState('')



  // console.log('name', name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"name":name , "model":model, "color":color , "purchase_rate":purchase , "price":price, "make":make}
      
      const response = await axios.post('http://localhost:8000/base/vehicle', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response){
        console.log('Response:', response.data);
        navigate('/vehicle')
      }
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };


  return (
    <div class='container'>
      <form class='mt-3' onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="name" class="form-control" id="name" aria-describedby="name"  value={name}
            onChange= {e => setName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">Model</label>
          <input type="text" class="form-control" id="model" aria-describedby="model" value={model}
            onChange= {e => setModel(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="color" class="form-label">Color</label>
          <input type="text" class="form-control" id="color" aria-describedby="color" value={color}
            onChange= {e => setColor(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="purchase" class="form-label">Purchase Rate</label>
          <input type="text" class="form-control" id="purchase" aria-describedby="purchase" value={purchase}
            onChange= {e => setPurchase(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="text" class="form-control" id="price" aria-describedby="price"  value={price}
            onChange= {e => setPrice(e.target.value)} />
        </div>

        <select class="form-select" aria-label="Default select example" onChange={e => setMake(e.target.value)}>
          <option selected>Open this select menu</option>
          <option value="1">Audi</option>
          <option value="2">Mercedes</option>
          <option value="3">Toyota</option>
          <option value="4">Honda</option>
          <option value="5">HAVAL</option>
          <option value="6">Suzuki</option>
        </select>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Vehicle