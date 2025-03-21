 const express = require('express');
const DataModal = require('./DataModal');
 const router = express.Router();
const Data = require('./Data.json');
 router.get('/hello', (req, res)=>{
setTimeout(() => {
    return res.send("Hello This is Node js app");
}, 2000);
 })

 router.get('/login', async (req, res)=>{
    let data ={
        name:"Ganesh",
        number:"63345345",
        age: 25

    }
    let datas = await data.find();
    return res.json(datas);
 })
 
module.exports = router;
