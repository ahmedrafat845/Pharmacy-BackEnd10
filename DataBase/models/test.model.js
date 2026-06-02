import mongoose from "mongoose";



const testSchema=new mongoose.Schema({
    title:String,
    desc:String,
    classOfTest:String
})
export const testModel=mongoose.model('test',testSchema)