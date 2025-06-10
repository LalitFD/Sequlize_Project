
import { database } from "../Database/db.config.js";
import { User } from "../Model/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (request, response, next) => {
    try {
        let { name, email, password, contact } = request.body;

        let saltKey = bcrypt.genSaltSync(12);
        password = bcrypt.hashSync(password, saltKey);

        let user = await User.create({ name, email, password, contact });
        return response.status(201).json({ message: "Sign up success", user });
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal server error" })
    }
}


export const login = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({ where: { email }, raw: true });
        let password1 = bcrypt.compareSync(password, user.password)
        
        if (password1) {
            return response.status(201).json({ message: "sign in success" }, user)
        }
        else {
            return response.status(400).json({ message: "Wrong Password" })
        }
        // let user1 = await User.findOne({ where: { password: password1 }, raw: true })

    } catch (err) {
        return response.status(500).json({ error: "Internal server error" })
    }
}