const express=require('express');
const app=express();
//custom middleware
const addMiddleware=(req,res,next)=>{
    req.user="Guest";
    next();//Move to the next middleware or route handler

}
//Route using the middleware
app.get('/welcome',addMiddleware,(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
//Start the server
app.listen((3000),()=>{
    console.log(`Server running on http://localhost:3000`);
})