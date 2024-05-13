import React from 'react'

const VechileCard = ({item}) => {
  return (
    <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.model}</p>
                <p class="card-text">{item.make}</p>
            </div>
        </div>
  )
}

export default VechileCard


