import { testModel } from "../../../DataBase/models/test.model.js"



const addTest= async (req,res)=>{
    const { title ,desc ,classOfTest}=req.body
    await testModel.insertMany({title,desc,classOfTest})
    res.json({message:"succeesssssss"})
}
const getAllTests=async (req,res)=>{
    let tests=await testModel.find()
    res.json({messege:"success" ,tests}) 
}


export{
    addTest,
    getAllTests
}