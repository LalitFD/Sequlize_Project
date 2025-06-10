import { DataTypes } from "sequelize";
import { database } from "../Database/db.config.js";
// import { notes } from "./notes.model.js";

export const User = database.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,

    }
    ,
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    contact: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    password: {
        type: DataTypes.STRING(300),
        allowNull: true,

    }

},
)
// User.hasMany(notes, { foreignKey: "userId" });
database.sync()