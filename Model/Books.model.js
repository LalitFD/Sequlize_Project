import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";

export const Books = database.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    BookName: {
        type: DataTypes.STRING,
        allowNull: true
    },

    BookAuthor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    BookPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    BookType: {
        type: DataTypes.STRING
    }
})

database.sync()