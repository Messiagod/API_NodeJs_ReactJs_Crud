/* COMANDS: (npm install express), (npm install cookie-parser), (npm install cors), (npm install path) = (node server.js) = executar NPM RUN DEV*/
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/curso-basico-mern', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    /* useFindAndModify:false */
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
})


app.use(cors());
app.use(cookieParser());
app.use(express.json()); /* para receber e enviar json do front para o back*/

app.get('/', function(req,res){
    res.json({message: 'Helo World'})
});

app.use(routes);


app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
});