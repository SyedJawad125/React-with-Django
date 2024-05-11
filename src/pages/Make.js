import {React, useState} from 'react'
import axios from 'axios'

const Make = () => {

  const [name, setName] = useState('')

  console.log('name', name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const payload = {"name":name}
      const response = await axios.post('http://localhost:8000/base/make', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);
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
          <label for="name" class="form-label">Name Of Company</label>
          
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" 
            value={name}
            onChange= {e => setName(e.target.value)}
          />
        
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>
    </div>
  )
}

export default Make