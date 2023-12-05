import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name : "",
    email : "",
    number : 0
  })
  const [user, setUser] = useState({})

  
  const fetchDetail = async () =>{
    const response = await axios.get('http://localhost:5000/findUser/' + id)
    const data = response.data[0];
    setUser(data);
    // console.log("data", data);
    // console.log("user", user);
  }

  useEffect(()=>{
    fetchDetail();
  },[])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Working")
    axios.put('http://localhost:5000/updateUser/' + id, {values})
    .then(res => console.log(res))
    .catch(err => console.log(err))
    navigate('/')
    location.reload()
  }

  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit} >
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input  onChange={e => setValues({...values, name: e.target.value})}  type="text" name='name' className="form-control" placeholder={user.name}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input onChange={e => setValues({...values, email: e.target.value})} type="email" name='email' className='form-control' placeholder={user.email}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input onChange={e => setValues({...values, number: e.target.value})} type="text" name='phone' className="form-control" placeholder={user.number}/>
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Update
