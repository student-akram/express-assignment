const express = require('express');
const app = express();      
// Middleware to parse JSON
app.use(express.json());        
app.get('/welcome/:username', (req, res) => {
    const username = req.params.username;       
    const role= req.query.role;
     res.send(`Welcome ${username}, your role is ${role}`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});