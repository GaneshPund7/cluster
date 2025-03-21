const express = require('express');
const cluster = require('cluster');
const os = require('os');
const router = require('./router');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(express.json());
const PORT = 9000;
app.use(router);

const mongoURL = 'mongodb://localhost:27017/nimap'
mongoose.connect(mongoURL).then("Database connected..!");
if( cluster.isMaster){
    // console.log("Master is proccessing..!");
    console.log(`Master process ${process.pid} is running`);
    let noOfCPUs = os.cpus().length;
    
    for( let i = 0; i<noOfCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died. Restarting...`);
        cluster.fork();
      });
}else{
app.listen(PORT, ()=>{console.log(`Server is running ${process.pid}on port: localhost:${PORT}`)})
}