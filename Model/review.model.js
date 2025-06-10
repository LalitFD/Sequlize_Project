import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";

export const review = database.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    , rating: DataTypes.INTEGER,
    Comment: DataTypes.STRING,
    reviewName: DataTypes.STRING,
    reviewEmail: DataTypes.STRING
})

database.sync();