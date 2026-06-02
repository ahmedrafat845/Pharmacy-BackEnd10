import express from "express";
import { addTest, getAllTests } from "./test.controller.js";

const testRouter=express.Router()

testRouter.post('/addTest',addTest)
testRouter.get('/getAllTests',getAllTests)

export default testRouter