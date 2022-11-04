import React, { useState } from 'react'

const AddRemoveComponent = () => {
  const [state, setState] = useState([{
    name:'',
    price:''
  }])

  return (
    <div style={{border:'1px solid black'}}>
        <label htmlFor=''> Meal Plane</label>
      <div style={{margin:'20px', padding:'10px'}}>
        <label htmlFor=''>Name</label>
        <input></input>
        <label htmlFor=''>price</label>
        <input></input>
      </div>
    </div>
  )
}

export default AddRemoveComponent;