// 

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "chinmay.deolekar1@gmail.com",
    pass: "vurx dywq jchy mxuy",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ganesh Pund" <ganeshpund0000@gmail.com>',
    to: "ganesh.pund@nimapinfotech.in",
    subject: "Applying for node js develper",  
  
    html: `<div>
    <h4>Hi, </h4>
    <h4>Ganesh Pund</h4>
    <p> I am applying for node js developer in nimap infotech mumbai </p>
    <p>I have the good knowledge about javascript and node js framework </p>
    <p> I have complated 6 months of internship form asimilate technology pune</p>
    <h5>I hope you finding a mail</h5>
    <h6> Thanks and regards</h6>
    </div>`, 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

// main().catch(console.error);
module.exports = sendMail;