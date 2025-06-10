import express from "express";
// import { register } from "module";
import { login, register } from "../Controller/User.controller.js";
const router = express.Router();

router.post("/register", register);

router.get("/login", login) // --> controller

export default router;
