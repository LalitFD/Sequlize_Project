import express from "express";

import router from "./Routes/user.router.js";
import bodyParser from 'body-parser';
import Nrouter from "./Routes/notes.router.js";
import "./Model/association.js";
import Brouter from "./Routes/books.router.js";
import cartRouter from "./Routes/cart.router.js";


const app = express();

//postman me data ene ke liye 
app.use(express.json());

// login or register 
app.use("/user", router)  // --> router

// notes wo create or delete fatch ho rhe hai retrieve 
app.use("/note", Nrouter)


// books ko save 
app.use("/Books", Brouter)



app.use("/cart", cartRouter);

app.listen(3000, () => {
    console.log("Server started")
})