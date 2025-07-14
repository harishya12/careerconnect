require('dotenv').config(); // MUST be at the very top
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER, // loads from .env
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

module.exports = pool;