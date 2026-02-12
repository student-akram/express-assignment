const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

/* ✅ ROUTES */

// GET /products
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

// POST /products
app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// GET /categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

// POST /categories
app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

/* ✅ WILDCARD ROUTE (404 handler)
   MUST be last */
app.use( (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

/* ✅ START SERVER */
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
