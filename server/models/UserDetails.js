const mongoose=require('mongoose')
const User_Details=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },mobile:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true
    },
    cart:{
        type:[Object]

    },
    orders:{
        type:[Object]
    }


})
module.exports=mongoose.model("User_Details",User_Details);
