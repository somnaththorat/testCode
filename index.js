import express from 'express'
import mongoose from 'mongoose'
import router from './route/UserRoute.js'
const app = express()
app.use(express.json())
const PORT = 4000;
const URI = 'mongodb://localhost:27017/testcode'

app.use('/users', router);

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`);
        })
    }).catch((e)=>{
        console.log(e.message);
    })





