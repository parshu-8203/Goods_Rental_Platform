const mongoose=require("mongoose")
const Products=mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true

    },
    Category:{
        type:String,
        required:true

    },
    Location:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true

    },
    Images:{
        type:Array,
        default : [],
        required:true   
    }

})
module.exports=mongoose.model("Products",Products);
