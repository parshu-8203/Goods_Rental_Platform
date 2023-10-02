const mongoose=require('mongoose')
const Locations=mongoose.Schema({
    City:String,
    image:String
})
module.exports=mongoose.model("Locations",Locations)
