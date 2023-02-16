import mysql from 'mysql2'
import dotenv from 'dotenv'

// create the connection to the database
dotenv.config();
const db = mysql.createConnection({
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
});

export default db;