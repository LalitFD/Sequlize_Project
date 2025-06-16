import express from "express";
import { addtoCart, deleteCart } from "../Controller/cart.controller.js";

let cartRouter = express.Router();


//Book ko cart me add karne ka router
cartRouter.post("/add", addtoCart);



//Book ko cart  me se delete  karne ka router
cartRouter.delete("/delete", deleteCart);

export default cartRouter;