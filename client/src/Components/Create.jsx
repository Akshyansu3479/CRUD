import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [values, setValues] = useState({
    name : "",
    email : "",
    number : 0
  })
  
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(values)
    axios.post('http://localhost:5000/createDb', {values})
    .then(res => console.log(res))
    .catch(err => console.log(err))
    navigate('/')
  }
 
  

  return (
    <>
  <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit} >
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input  onChange={e => setValues({...values, name: e.target.value})} type="text" name='name' className="form-control" placeholder="Enter Name"/>
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input onChange={e => setValues({...values, email: e.target.value})} type="email" name='email' className='form-control' placeholder="Enter Email"/>
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input onChange={e => setValues({...values, number: e.target.value})} type="text" name='phone' className="form-control" placeholder="Enter Phone"/>
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Create
