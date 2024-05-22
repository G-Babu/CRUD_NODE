const express = require("express");
const mongoose = require("mongoose"); 
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.routes");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

mongoose.connect("mongodb+srv://gibin123:gibin123@cluster0.12vdfgc.mongodb.net/?retryWrites=true&w=majority&appName=Products", {useNewUrlParser: true}).then(() => {
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
    
}).catch((err) => {
    console.log(err);
});

