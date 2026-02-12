const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());
//Routes
app.get('/orders',(req,resp)=>{
    resp.send(`Here is the list of all orders.`)

});

app.post('/orders',(req,resp)=>{
    resp.send(`A new order has been created.`);
});
app.get('/users',(req,resp)=>{
    resp.send(`Here is the list of all users.`)
});
app.post('/users',(req,resp)=>{
    resp.send(`A new user has been created.`);
});
//Start the server
app.listen((3000),()=>{
    console.log(`Server running on http://localhost:3000`);
});