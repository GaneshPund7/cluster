const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cluster = require('cluster');
const os = require('os');
const router = require('./router');
const app = express();
const PORT = 3000;

const cpus = os.cpus.length;

app.use(router);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
 
if (cluster.isPrimary) {
    cluster.fork();

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
       setTimeout(() => {
        console.log("Restarting your server in 2 second...");     
        cluster.fork();
       }, 2000);


    })
} else {
    app.listen(PORT, () => {
        console.log(`Worker ${process.pid} run, Server is running on port: localhost: ${PORT}`);
    })
}
