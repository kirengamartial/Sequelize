import { Sequelize } from "sequelize";

const db = new Sequelize('sequel','postgres', 'kirenga123',  {
    host: 'localhost',
    dialect: 'postgres' 
} )


export default db