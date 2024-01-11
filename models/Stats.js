import mongoose from "mongoose"

const schema=mongoose.Schema({

   users:{
        type:Number,
       default:0
    }, subscription:{
        type:Number,
       default:0
    }, views:{
        type:Number,
       default:0
    },

    
createdOn:{
    type:Date,
     default:Date.now,
} 


})

export const Stats=mongoose.model("Stats",schema);