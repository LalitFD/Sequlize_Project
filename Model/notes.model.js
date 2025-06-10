import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";
// import { User } from "./user.model.js";

export const notes = database.define("notes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    file_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    upload_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})
// notes.belongsTo(User, { foreignKey: "userId" });
database.sync() 