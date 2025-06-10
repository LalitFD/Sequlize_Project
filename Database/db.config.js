import { Sequelize } from "sequelize";


export const database = new Sequelize("bec_app", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

database.sync();
