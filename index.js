const express  = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get('/getusers',(req,res)=>{
    res.send({
        status:true,
        message:'data received'
    });
    // res.send('first node.js tutorial');
});

app.post('/adduser',(req,res)=>{
    console.log(req.body,'req');
    res.send('user added ...');
});

app.delete('/deleteuser/:id',(req,res)=>{
    console.log(req.params,'id params')
    res.send('user deleted ...');
});

app.put('/updateuser/:id',(req,res)=>{
    console.log(req.params,'id params')
    res.send('user updated ...');
});

app.listen(3000,()=>{
        console.log('server running');
});



 