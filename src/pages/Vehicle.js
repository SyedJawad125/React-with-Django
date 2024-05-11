import React from 'react'

const Vehicle = () => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')


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
          <input type="text" class="form-control" id="color" aria-describedby="color" />
        </div>
        <div class="mb-3">
          <label for="purchase" class="form-label">Purchase</label>
          <input type="text" class="form-control" id="purchase" aria-describedby="purchase" />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="text" class="form-control" id="price" aria-describedby="price"  />
        </div>

        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Suzuki</option>
          <option value="2">Toyota</option>
          <option value="3">Honda</option>
        </select>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Vehicle