import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";

export const cart = database.define("cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

database.sync();