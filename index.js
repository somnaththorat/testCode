import express from 'express'
import mongoose from 'mongoose'
import User from './model/User.js'
import { ObjectId } from 'bson'
const app = express()
app.use(express.json())
const PORT = 4000;
const URI = 'mongodb://localhost:27017/testcode'





app.get('/users', async(req, res)=>{
    const {id, phoneNumber}= req.query;
        const query = {}
        if(id){
            query._id = new ObjectId(id)
        }
        if (phoneNumber) {
            query.phoneNumber = phoneNumber;
        }
        // console.log('query', query);
        try {
            const user = await User.find(query);
            if (!user) {
                const nouser = await User.find();
                res.status(200).json(nouser)
            }
            // console.log('user', user)
            res.status(200).json({'user':user})

        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message })
        }
})

app.post('/users',async(req, res)=>{
    const user = req.body;
    // console.log(userName, phoneNumber);
    const newUser = new User(user)
    // console.log(user);
    
    try {
        const newUser1 = await newUser.save()
        res.json(newUser1)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.message })

    }
})

app.patch('/users', async(req, res)=>{
    const {id, phoneNumber}= req.query;
    const query = {}
        if(id){
            query._id = new ObjectId(id)
        }
        if (phoneNumber) {
            query.phoneNumber = phoneNumber;
        }
        // console.log('query', query)
        const newNumber = 123456789;
        const newUpdate = {
            phoneNumber: newNumber
        }
        try {
            const user = await User.updateMany(query, {$set: newUpdate})
            if (!user) {
                res.send('Not Found')
            }
            console.log(user)
            res.json({message: `Updated ${user.modifiedCount} users`})

        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message })

        }

})


app.delete('/users', async(req, res)=>{
    const {id, phoneNumber}= req.query;
    const query = {}
        if(id){
            query._id = new ObjectId(id)
        }
        if (phoneNumber) {
            query.phoneNumber = phoneNumber;
        }
        // console.log('query', query);
        try {
            const user = await User.deleteMany(query)
            res.json({message: `Users deleted`})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({error: error.message })

        }
})


mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`);
        })
    }).catch((e)=>{
        console.log(e.message);
    })





