
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5000/getAll')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    // console.log(data)
  },[])

  const handleDelete = (id)=>{
  console.log(id);
  axios.delete('http://localhost:5000/deleteUser/' + id)
  .then(res => console.log(res))
  .catch(err => console.log(err))
   location.reload()
  }


  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List Of Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end">
            <Link to='/create' className="btn btn-sm btn-success">
              Add +
            </Link>
          </div>
          <table className="table table-striped">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
            <tbody>
            {
              data.map((item, i) => {
               return(
                <tr key={i} >
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>
                  <Link to={`/read/${item._id}`} className="btn btn-sm btn-info me-2">Read</Link>
                  <Link to={`/update/${item._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button onClick={e => handleDelete(item._id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
               )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
