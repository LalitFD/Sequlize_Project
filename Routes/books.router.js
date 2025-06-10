import express from "express";
import { SaveBooks } from "../Controller/Books.controller.js";

let Brouter = express.Router();


// Books upload karne ka router
Brouter.post("/book", SaveBooks);

export default Brouter;