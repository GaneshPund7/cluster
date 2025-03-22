const express = require('express');
const sendMail = require('./nodemailer');
const router = express.Router();

router.get('/login', sendMail, async (req, res)=>{
  
   return res.send("Mail sended successfuly..!")
});

module.exports = router;