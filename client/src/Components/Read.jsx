import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const Read = () => {
  
  const {id} = useParams();
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


  return (
    <>
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Name: {user.name} </strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {user.email} </strong>
        </div>
        <div className='mb-3'>
          <strong>Phone: {user.number} </strong>
        </div>
        <Link className='btn btn-success'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
    </>
  )
}

export default Read
