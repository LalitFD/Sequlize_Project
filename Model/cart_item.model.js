import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";

export const cart_item = database.define("cart_item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})