

const express = require('express');
var cors = require('cors');
const conection = require('./conection');
const userRoute = require('./routes/producto');
const app = express();
app.use(cors({
    origin: '*'
  }));
app.use(
    express.urlencoded({
        extend:true
    })
)

app.use(express.json());
app.use('/producto',userRoute);


module.exports = app;