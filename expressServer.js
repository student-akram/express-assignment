const express=require('express');
const app=express();
app.use(express.json());
const logger=(req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
}
app.use(logger);

app.get('/products',(req,resp)=>{
    resp.send("Here is the list of all products.");
})
app.post('/products',(req,resp)=>{
    resp.send("A new product has been added.");
})
app.get('/categories',(req,resp)=>{
    resp.send("Here is the list of all categories.");
});
app.post('/categories',(req,resp)=>{
    resp.send("A new category has been created.");
});
app.listen(4000,()=>{
    console.log(`Server running on http://localhost:4000`)
})
