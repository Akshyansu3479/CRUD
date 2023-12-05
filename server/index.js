const express = require('express')
const PORT = 5000
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const userModel = require('./models/User');


// middleware
app.use(cors())
app.use(express.json())


// connecting mongoDB
mongoose.connect("mongodb://localhost:27017/crudDB")

// creating users
app.post('/createDb', async (req,res)=>{
   // console.log(req.body.values)
   await userModel.create(req.body.values)
   .then(response => res.json(response))
   .catch(err => console.log(err))
})

// getting all users
app.get('/getAll', (req, res)=>{
   userModel.find({})
   .then(users => res.send(users))
   .catch(err => console.log(err))
})

// getting a particular user by their id from db
app.get('/findUser/:id',async (req, res)=>{
   const id = req.params.id
    await userModel.find({_id:id})
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

// updating users by their id
app.put(`/updateUser/:id`,async (req, res)=>{
    const userData = req.body.values
    const id = req.params.id;
    await userModel.findByIdAndUpdate({_id:id},
    {name: userData.name, email: userData.email, number: userData.number})
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

// deleting user by their id

app.delete('/deleteUser/:id',async (req, res)=>{
 const id = req.params.id
 userModel.deleteOne({_id:id})
 .then(response => res.send(response))
 .catch(err => console.log(err))
})

// creating a server
app.listen(PORT, ()=>{
 console.log(`Server is listening on port http://localhost:${PORT}`)
})
