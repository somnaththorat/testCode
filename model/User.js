import mongoose, { Schema }  from "mongoose";

const userSchema = new Schema({
    userName: {
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    },
})

const User = mongoose.model('user', userSchema)
export default User;